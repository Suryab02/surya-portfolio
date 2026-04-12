import React, { useRef, useMemo } from 'react'
import { extend, useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Water } from 'three/examples/jsm/objects/Water'

extend({ Water })

export default function Ocean() {
  const mesh = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useMemo(() => new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg', (texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  }), [])
  
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.outputColorSpace
    }),
    [waterNormals, gl.outputColorSpace]
  )

  useFrame((state, delta) => (mesh.current.material.uniforms.time.value += delta))

  return (
    <water 
      ref={mesh} 
      args={[new THREE.PlaneGeometry(10000, 10000), config]} 
      rotation-x={-Math.PI / 2} 
    />
  )
}
