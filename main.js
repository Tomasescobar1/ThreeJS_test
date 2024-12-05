
import * as THREE from "three";
import { OrbitControls, ThreeMFLoader } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";

let value1 = 0;

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(7);
let mixer = new THREE.AnimationMixer();
//scene.add(axesHelper);
renderer.shadowMap.enabled = true;
scene.background = new THREE.Color(0XFFFFFF);


const nextStepButton = document.createElement('button');
document.getElementById("Next").append(nextStepButton);
nextStepButton.textContent = 'Siguiente';
nextStepButton.setAttribute('id', 'toNext');
const nextLabel = new CSS2DObject(nextStepButton);
scene.add(nextLabel);
nextLabel.position.set(0, -0.7, 0);

let nextButton = document.getElementById("toNext");

const resetButton = document.createElement('button');
document.getElementById("Reset").append(resetButton);
resetButton.textContent = 'Inicio';
resetButton.setAttribute('id', 'toReset');
const resetLabel = new CSS2DObject(resetButton);
scene.add(resetLabel);
resetLabel.position.set(0, -1.3, 0);

let resButton = document.getElementById("toReset");

document.body.appendChild(renderer.domElement);

const GLoader = new GLTFLoader();

GLoader.load("assets/prueba_ensamble_anim.glb", function (gltf) {

  let animations = gltf.animations;

  gltf.scene;
  gltf.scenes;
  gltf.cameras;

  const model = gltf.scene;

  let Anim_2 = [];

  for(let i = 0; i <= 7; i++)
  {

    Anim_2[i] = mixer.clipAction(animations[i], model);
    
  }
  
  function stepButtonVar()
  {
    console.log(value1);

    if(value1 <= 7)
    {

      Anim_2[value1].setLoop(THREE.LoopOnce);
          
      Anim_2[value1].clampWhenFinished = true;
      
      Anim_2[value1].play();

      value1++;

    }
    
  }

  function resetButtonVar()
  {
    value1 = 0;

    for(let i = 0; i <= 7; i++)
    {

      Anim_2[i].stop();
      
    }



    console.log(value1);

    mixer.setTime(0);

  }

  nextButton.addEventListener('click', function(e) {stepButtonVar();});

  resButton.addEventListener('click', function(e) {resetButtonVar();})

  scene.add(model);

  model.translateY(0.1);
  model.translateZ(-0.0);
  model.translateX(0.0);
  model.rotateX(0.0);

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

/*const paragraph = document.createElement('paragraph');
paragraph.textContent = '';
const cPointLabel = new CSS2DObject(paragraph);
scene.add(cPointLabel);
cPointLabel.position.set(0, -0.45, 0);*/

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
camera.position.x = -4;

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

//const ambientLight = new THREE.AmbientLight(0xffffff);
//ambientLight.castShadow = true;
//scene.add(ambientLight);

renderer.setClearColor(0xB0C4DE, 0.5);

animate();

function animate(t = 0)
{
  
  requestAnimationFrame(animate);

  // mesh.rotation.y = t*0.0001;

  labelRenderer.render(scene, camera);

  renderer.render(scene, camera);

  mixer.update(1/20);

  controls.update();

}

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / this.window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(this.window.innerWidth, this.window.innerHeight);
});
