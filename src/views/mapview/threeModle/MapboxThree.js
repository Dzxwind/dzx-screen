import * as THREE from "three";
import Mapbox from 'mapbox-gl'

class MapboxThree {
  constructor(options) {
    this.firstFlag = true
    this.options = options
    this.scene = new THREE.Scene()
    this.lightInit()
  }
  rendererInit(map, gl) {
    this.map = map
    this.renderer = new THREE.WebGLRenderer({
      canvas: map.getCanvas(),
      context: gl
    })
    this.renderer.autoClear = false
  }
  lightInit() {
    this.directionLight = new THREE.DirectionalLight(0xffffff, 100)
    this.directionLight.position.set(0, 1000, 0)
    this.scene.add(this.directionLight)
  }
  cameraInit(matrix) {
    const { center, height, rotate, scale } = this.options
    this.camera = new THREE.Camera()
    var rotationX = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), rotate[0]);
    var rotationY = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), rotate[1]);
    var rotationZ = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), rotate[2]);
    var m = new THREE.Matrix4().fromArray(matrix);
    var l = new THREE.Matrix4().makeTranslation(
      Mapbox.MercatorCoordinate.fromLngLat(center, height).x,
      Mapbox.MercatorCoordinate.fromLngLat(center, height).y,
      Mapbox.MercatorCoordinate.fromLngLat(center, height).z
    )
    .scale(new THREE.Vector3(scale, -scale, scale))
    .multiply(rotationX)
    .multiply(rotationY)
    .multiply(rotationZ);
    this.camera.projectionMatrix.elements = matrix;
    this.camera.projectionMatrix = m.multiply(l);
  }
  renderScene() {
    this.renderer.render(this.scene, this.camera);
    this.map.triggerRepaint();
  }
  getLayerObject() {
    return {
      id: this.options.id,
      type: 'custom',
      renderingMode: '3d',
      onAdd: (map, gl) => {
        this.rendererInit(map, gl)
      },
      render: (gl, matrix) => {
        this.cameraInit(matrix)
        this.renderer.state.reset();
        this.render()
        this.renderScene()
      }
    }
  }
}

export default MapboxThree
