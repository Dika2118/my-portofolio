import { useRef, useEffect, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { FluidShader } from './FluidShader'

export default function InteractiveBackground({ isHovered = true }) {
  const materialRef = useRef()
  const { pointer } = useThree()

  // Ref internal untuk melacak status penampakan visual tanpa memicu re-render React
  const shouldShowRef = useRef(true)
  const currentOpacity = useRef(1.0)

  // Posisi fisik angin saat ini di dalam canvas
  const windPosition = useRef(new THREE.Vector2(0.5, 0.5))
  const timerRef = useRef(null)

  // Mengatur interaksi pewaktuan saat kursor lepas dari area
  useEffect(() => {
    if (isHovered) {
      // Jika kursor masuk kembali, batalkan antrean delay 3 detik, langsung tampilkan
      if (timerRef.current) clearTimeout(timerRef.current)
      shouldShowRef.current = true
    } else {
      // Jika kursor lepas, sembunyikan instan
      shouldShowRef.current = false

      // Buat antrean pemicu untuk memunculkan kembali angin biasa setelah tepat 3 detik (3000ms)
      timerRef.current = setTimeout(() => {
        shouldShowRef.current = true
      }, 3000)
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isHovered])

  // Inisialisasi variabel seragam untuk dijembatani ke GPU
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uOpacity: { value: 1.0 }
    }),
    []
  )

  useFrame((state) => {
    if (!materialRef.current) return
    const { clock } = state

    // 1. Perbarui putaran waktu untuk liukan angin
    materialRef.current.uniforms.uTime.value = clock.getElapsedTime()

    // 2. Animasi pudar transisi Opacity secara halus (Lerp)
    const targetOpacity = shouldShowRef.current ? 1.0 : 0.0
    currentOpacity.current += (targetOpacity - currentOpacity.current) * 0.15
    materialRef.current.uniforms.uOpacity.value = currentOpacity.current

    // 3. Penentuan Target Posisi
    let targetX
    let targetY

    if (isHovered) {
      // Mode Ikut Kursor (Konversi koordinat layar ke koordinat UV 0 hingga 1)
      targetX = (pointer.x + 1) / 2
      targetY = (pointer.y + 1) / 2
    } else {
      // Mode Idle Angin Bergerak Sendiri: Berayun lembut di tengah layar saat ditinggal
      targetX = 0.5 + Math.sin(clock.getElapsedTime() * 0.5) * 0.2
      targetY = 0.5 + Math.cos(clock.getElapsedTime() * 0.3) * 0.1
    }

    // Gerakkan objek angin mengejar target posisi dengan efek inersia lambat lambat
    windPosition.current.x += (targetX - windPosition.current.x) * 0.06
    windPosition.current.y += (targetY - windPosition.current.y) * 0.06

    materialRef.current.uniforms.uMouse.value.copy(windPosition.current)
  })

  return (
    <mesh>
      <planeGeometry args={[16, 9]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={FluidShader.vertexShader}
        fragmentShader={FluidShader.fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  )
}
