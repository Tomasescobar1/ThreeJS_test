
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";


const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(7);
//scene.add(axesHelper);
renderer.shadowMap.enabled = true;
scene.background = new THREE.Color(0XFFFFFF);

document.body.appendChild(renderer.domElement);

const GLoader = new GLTFLoader();

GLoader.load("assets/modular_desk.glb", function (gltf) {
  const model = gltf.scene;

  scene.add(model);
  model.translateY(-0.01);
  model.translateZ(-0.3);
  model.translateX(0.0);
  model.rotateX(0.0);
  
  gltf.animations;
  gltf.scene;
  gltf.scenes;
  gltf.cameras;
  model.traverse(function(node)
  {
    if(node.isMesh)
    {
      node.castShadow = true;
    }
  });

  gltf.asset;}, 
    function(xhr) {console.log(( xhr.loaded/xhr.total * 100 ) + '%loaded');},
    function(error) {console.log('An error happened');}
);

GLoader.load("assets/office_chair.glb", function (gltf) {
  const model = gltf.scene;

  scene.add(model);
  model.translateY(-0.01);
  model.translateZ(-0.3);
  model.translateX(0.0);
  model.rotateX(0.0);

  model.scale.set(1.7,1.7,1.7);
  
  gltf.animations;
  gltf.scene;
  gltf.scenes;
  gltf.cameras;
  model.traverse(function(node)
  {
    if(node.isMesh)
    {
      node.castShadow = true;
    }
  });

  gltf.asset;}, 
    function(xhr) {console.log(( xhr.loaded/xhr.total * 100 ) + '%loaded');},
    function(error) {console.log('An error happened');}
);

const paragraph = document.createElement('paragraph');
paragraph.textContent = 'Esta es una prueba para Industrias Dofi';
const cPointLabel = new CSS2DObject(paragraph);
scene.add(cPointLabel);
cPointLabel.position.set(0, 2.5, 0);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);

const planeGeo = new THREE.PlaneGeometry(30, 30);
const planeMat = new THREE.MeshPhongMaterial({color: 0XFFFFFF, shininess:1200})
const plane1 = new THREE.Mesh(planeGeo, planeMat);
plane1.rotateX(Math.PI/-2);
scene.add(plane1);
plane1.receiveShadow = true;

const aspect = w/h;
const fov = 50;
const near = 0.1;
const far = 50;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 3;
camera.position.y = 4;
camera.position.x = -5;

//const scene = new THREE.Scene();
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial( {color: 0xffffff, flatShading: true });
const mesh = new THREE.Mesh(geo, mat);
//scene.add(mesh);
mesh.position.y = 2.0;
mesh.castShadow = true;

const wireMat = new THREE.MeshBasicMaterial( { color: 0xccff, wireframe:true } );
const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);
//mesh.add(wireMesh);

const dirLight = new THREE.DirectionalLight(0xFFFFFF, 2.0);
const dirLightHelper = new THREE.DirectionalLightHelper(dirLight);
dirLight.castShadow = true;
dirLight.position.x = 0.5;
dirLight.position.y = 3.1;
dirLight.position.z = 1.3;
dirLight.rotateY(-1.0);
dirLight.rotateZ(-0.8);

scene.add(dirLight);
scene.add(dirLightHelper);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff);
scene.add(hemiLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.castShadow = true;
scene.add(ambientLight);

renderer.setClearColor(0xB0C4DE, 0.5);

animate();

function animate(t = 0)
{

  requestAnimationFrame(animate);

  // mesh.rotation.y = t*0.0001;

  labelRenderer.render(scene, camera);

  renderer.render(scene, camera);

  controls.update();

}

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / this.window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(this.window.innerWidth, this.window.innerHeight);
});
