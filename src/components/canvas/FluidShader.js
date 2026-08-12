export const FluidShader = {
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uOpacity; // Untuk mengatur transisi hilang/muncul
    varying vec2 vUv;

    // Penghasil Simplex Noise untuk pola guratan angin alami
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0) ) + i.x + vec3(0.0, i1.x, 1.0) );
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m; m = m*m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.y = a0.y * x12.x + h.y * x12.y; g.z = a0.z * x12.z + h.z * x12.w;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;
      
      // Kecepatan alur angin dasar
      float noisePattern = snoise(vec2(uv.x * 2.0 - uTime * 0.4, uv.y * 3.0 + uTime * 0.1));
      
      // Membuat bentuk guratan "Angin Pipih Horizontal" meliuk di sepanjang garis kursor
      float windLine = abs(uv.y - uMouse.y - (noisePattern * 0.12));
      float windStrength = smoothstep(0.18, 0.0, windLine);

      // Batasi pancaran angin agar berpusat menyempit di sekitar koordinat X mouse
      float xConstraint = smoothstep(0.4, 0.0, distance(uv.x, uMouse.x));
      
      // Campuran warna gradasi biru kelasi ke indigo
      vec3 colorA = vec3(0.0, 0.4, 0.9);
      vec3 colorB = vec3(0.3, 0.0, 0.8);
      vec3 finalColor = mix(colorA, colorB, noisePattern * 0.5 + 0.5);

      // Hitung akumulasi kekuatan transparansi akhir dikalikan pengontrol Opacity global
      float finalAlpha = windStrength * xConstraint * 0.5 * uOpacity;

      gl_FragColor = vec4(finalColor * finalAlpha, 1.0);
    }
  `
};
