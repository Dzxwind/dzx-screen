import * as THREE from "three";
import MapboxThree from './MapboxThree'

class RotatePin extends MapboxThree {
  constructor(options) {
    super(options)
    this.materialInit()
    this.natureLightInit()
    this.addArrow()
    this.addPlate()
    this.count = 0
  }
  materialInit() {
    this.arrowMaterial = new THREE.MeshPhongMaterial({ color: 0x288ae5, transparent: true ,side: THREE.DoubleSide, specular: 0x2788af, shininess: 26, flatShading: true})
  }
  natureLightInit() {
    // 户外光源
    // 第一个参数是天空的颜色，第二个参数是地上的颜色，第三个参数是光源的强度
    this.hemisphereLight = new THREE.HemisphereLight(
      0xaaaaaa,
      0x000000,
      0.9
    );
    // 环境光源
    this.ambientLight = new THREE.AmbientLight(0xdc8874, 0.2);
    // 方向光是从一个特定的方向的照射
    // 类似太阳，即所有光源是平行的
    // 第一个参数是关系颜色，第二个参数是光源强度
    this.shadowLight = new THREE.DirectionalLight(0xffffff, 0.9);
    this.pointLight = new THREE.PointLight(0xffffff,1,100);
    this.pointLight.position.set(10, 20, 20);
    // 设置光源的位置方向
    this.shadowLight.position.set(0, 0, 0);
    // 开启光源投影
    this.shadowLight.castShadow = true;
    // 定义可见域的投射阴影
    this.shadowLight.shadow.camera.left = -400;
    this.shadowLight.shadow.camera.right = 400;
    this.shadowLight.shadow.camera.top = 400;
    this.shadowLight.shadow.camera.bottom = -400;
    this.shadowLight.shadow.camera.near = 1;
    this.shadowLight.shadow.camera.far = 1000;
    // 定义阴影的分辨率；虽然分辨率越高越好，但是需要付出更加昂贵的代价维持高性能的表现。
    this.shadowLight.shadow.mapSize.width = 2048;
    this.shadowLight.shadow.mapSize.height = 2048;
    this.scene.add(this.hemisphereLight);
    this.scene.add(this.shadowLight);
    this.scene.add(this.ambientLight);
    this.scene.add(this.pointLight);
  }
  addArrow() {
    this.arrowGeom = new THREE.ConeGeometry(20, 30, 3)
    this.arrowMesh = new THREE.Mesh(this.arrowGeom, this.arrowMaterial)
    this.arrowMesh.position.set(0, 0, 0.3)
    this.arrowMesh.rotateX(Math.PI)
    this.scene.add(this.arrowMesh)
  }
  addPlate() {
    this.plateGeom = new THREE.CircleGeometry(0.01, 0)
    this.plateMesh = new THREE.Mesh(this.plateGeom)
    this.scene.add(this.plateMesh)
  }
  animate() {
    this.arrowMesh.rotateY(0.01)
    this.arrowMesh.translateY(0.3 * Math.sin(this.count))
    this.count += 0.08 
  }
  render() {
    this.animate()
  }
}

export default RotatePin