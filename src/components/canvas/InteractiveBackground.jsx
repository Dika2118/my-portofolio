import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { FluidShader } from './FluidShader'

export default function InteractiveBackground({ isHovered = false }) {
  const materialRef = useRef()
  const { pointer } = useThree()

  // Posisi fisik angin saat ini di dalam canvas
  const windPosition = useRef(new THREE.Vector2(0.5, 0.5))

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
    materialRef.current.uniforms.uOpacity.value = 1.0

    // 2. Penentuan Target Posisi
    let targetX
    let targetY

    if (isHovered) {
      // Mode Ikut Kursor (Konversi koordinat [-1, 1] ke UV [0, 1])
      targetX = Math.max(0.05, Math.min(0.95, (pointer.x + 1) / 2))
      targetY = Math.max(0.05, Math.min(0.95, (pointer.y + 1) / 2))
    } else {
      // Mode Idle Angin Bergerak Sendiri: Berayun lembut di tengah layar saat kursor tidak di banner
      targetX = 0.5 + Math.sin(clock.getElapsedTime() * 0.6) * 0.25
      targetY = 0.5 + Math.cos(clock.getElapsedTime() * 0.4) * 0.15
    }

    // Gerakkan objek angin mengejar target posisi dengan efek inersia lambat (lerp)
    const lerpFactor = isHovered ? 0.08 : 0.04
    windPosition.current.x += (targetX - windPosition.current.x) * lerpFactor
    windPosition.current.y += (targetY - windPosition.current.y) * lerpFactor

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
