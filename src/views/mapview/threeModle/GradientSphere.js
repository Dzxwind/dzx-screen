import * as THREE from "three";
import MapboxThree from './MapboxThree'

class GradientSphere extends MapboxThree {
  constructor(options) {
    super(options)
    this.materialInit()
    this.lightInit()
    this.addSphere()
    this.addLightSphere()
    this.count = 0
  }
  materialInit() {
    this.redMaterial = new THREE.MeshBasicMaterial({ color: 0x81ecec, transparent: true, opacity: 0.5 ,side: THREE.DoubleSide})
    this.lightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: true,transparent: true, opacity: 0.3 ,side: THREE.DoubleSide })
  }
  lightInit() {
    this.directionLight = new THREE.DirectionalLight(0xffffff, 100)
    this.directionLight.position.set(0, 1000, 0)
    this.scene.add(this.directionLight)
  }
  addSphere() {
    this.sphereGeom = new THREE.SphereGeometry(40, 20, 10 ,0, Math.PI * 2, 0, Math.PI / 2)
    this.sphereMesh = new THREE.Mesh(this.sphereGeom.clone(), this.redMaterial)
    this.sphereMesh.position.set(0, 0, 0)
    this.scene.add(this.sphereMesh)
  }
  addLightSphere() {
    this.lightGeom = new THREE.SphereGeometry(40, 20, 10 ,0, Math.PI * 2 , 0, Math.PI / 2)
    this.lightMesh = new THREE.Mesh(this.lightGeom.clone(), this.lightMaterial)
    this.lightMesh.position.set(0, 0, 0)
    this.lightMesh.scale.multiplyScalar(1.07)
    this.scene.add(this.lightMesh)
  }
  animate() {
    const faceIndices = ['a', 'b', 'c', 'd']
    this.lightMesh.geometry.faces.forEach((item) => {
      let numberOfSide = ( item instanceof THREE.Face3 ) ? 3 : 4
      for (let i = 0; i < numberOfSide; i++) {
        let vertexIndex = item[faceIndices[i]]
        let point = this.lightMesh.geometry.vertices[vertexIndex]
        item.vertexColors[i] = new THREE.Color(Math.cos((point.y / 10) + this.count / 10), 0.8 , 1)
      }
    })
    this.lightMesh.geometry.elementsNeedUpdate = true
    this.count += 1
  }
  render() {
    this.animate()
  }
}

export default GradientSphere
