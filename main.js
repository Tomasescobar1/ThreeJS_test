

import * as THREE from "three";
import { OrbitControls, ThreeMFLoader } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";


// Setup general del programa

let value1 = 0;
let Anim_2 =[];

const w = window.innerWidth;
const h = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.setClearColor(0xB0C4DE, 0.5);

const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(7);

let mixer = new THREE.AnimationMixer();
//scene.add(axesHelper);
scene.background = new THREE.Color(0Xffffff);

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
camera.position.x = -4;
camera.position.y = 4;
camera.position.z = 3;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;

/*const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial( {color: 0xffffff, flatShading: true });
const mesh = new THREE.Mesh(geo, mat);
const wireMat = new THREE.MeshStandardMaterial( { color: 0xccff, wireframe:true, flatShading:false } );
const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);
scene.add(mesh);
mesh.position.y = 2.0;
mesh.castShadow = true;*/

const dirLight = new THREE.DirectionalLight(0xFFFFFF, 2.0);
//const dirLightHelper = new THREE.DirectionalLightHelper(dirLight);
dirLight.castShadow = true;
dirLight.position.x = 0.5;
dirLight.position.y = 3.1;
dirLight.position.z = 1.3;
dirLight.rotateY(-1.0);
dirLight.rotateZ(-0.8);
scene.add(dirLight);
//scene.add(dirLightHelper);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff);
scene.add(hemiLight);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / this.window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(this.window.innerWidth, this.window.innerHeight);
});

const dofiLink = document.createElement('a');
document.getElementById("Link-Picture").append(dofiLink);
dofiLink.setAttribute('href', 'https://moduofi.com/industrias-dofi/');
dofiLink.setAttribute('id', 'Link-de-Dofi');
dofiLink.setAttribute('target', '"_blank"');

const dofiPNG = document.createElement('img');
document.getElementById("Link-de-Dofi").appendChild(dofiPNG);
dofiPNG.setAttribute('src', 'assets/Logo_Dofi.png');
dofiPNG.setAttribute('id', 'Logo-de-Dofi');

/*const LogoLabel = new CSS2DObject(dofiPNG);
scene.add(LogoLabel);
LogoLabel.position.set(0, 1.7, -2);*/

//-------------------------------------------------------------------


// Botón para avanzar al paso siguiente

const nextStepButton = document.createElement('button');
document.getElementById("Next").append(nextStepButton);
nextStepButton.textContent = 'Siguiente';
nextStepButton.setAttribute('id', 'toNext');
const nextLabel = new CSS2DObject(nextStepButton);
scene.add(nextLabel);
nextLabel.position.set(0, -0.7, 0);
let nextButton = document.getElementById("toNext");

function stepButtonVar()
{
  console.log(value1);

  //console.log(Anim_2.length);

  if(value1 <= 8)
  {
    switch(value1)
    {

      case 0:

        Anim_2[8].setLoop(THREE.LoopOnce);
        
        Anim_2[8].clampWhenFinished = true;

        Anim_2[8].play();
        
      break;
      
      case 1:

        Anim_2[7].setLoop(THREE.LoopOnce);
        
        Anim_2[7].clampWhenFinished = true;

        Anim_2[7].play();

      break;

      case 2:

        Anim_2[2].setLoop(THREE.LoopOnce);
        
        Anim_2[2].clampWhenFinished = true;

        Anim_2[2].play();

      break;

      case 3:

        Anim_2[3].setLoop(THREE.LoopOnce);
        
        Anim_2[3].clampWhenFinished = true;

        Anim_2[3].play();

      break;

      case 4:

        Anim_2[4].setLoop(THREE.LoopOnce);
        
        Anim_2[4].clampWhenFinished = true;

        Anim_2[4].play();

      break;

      case 5:

        Anim_2[5].setLoop(THREE.LoopOnce);
        
        Anim_2[5].clampWhenFinished = true;

        Anim_2[5].play();

      break;

      case 6:

        Anim_2[6].setLoop(THREE.LoopOnce);
        
        Anim_2[6].clampWhenFinished = true;

        Anim_2[6].play();

      break;

      case 7:

        Anim_2[1].setLoop(THREE.LoopOnce);
        
        Anim_2[1].clampWhenFinished = true;

        Anim_2[1].play();

      break;

      case 8:

        Anim_2[0].setLoop(THREE.LoopOnce);
        
        Anim_2[0].clampWhenFinished = true;

        Anim_2[0].play();

      break;

    }

    value1++;

  }

  //value1++;
  
}

nextButton.addEventListener('click', function(e) {stepButtonVar();});

//--------------------------------------------------------------------



// Botón para volver al inicio

const resetButton = document.createElement('button');
document.getElementById("Reset").append(resetButton);
resetButton.textContent = 'Inicio';
resetButton.setAttribute('id', 'toReset');
const resetLabel = new CSS2DObject(resetButton);
scene.add(resetLabel);
resetLabel.position.set(0, -1.3, 0);
let resButton = document.getElementById("toReset");

function resetButtonVar()
{
  value1 = 0;

  for(let i = 0; i <= 8; i++)
  {

    Anim_2[i].stop();
    
  }

  console.log(value1);

  mixer.setTime(0);

  camera.position.x = -4;
  camera.position.y = 4;
  camera.position.z = 3;

}

resButton.addEventListener('click', function(e) {resetButtonVar();});

//--------------------------------------------------------------------



// Loader de modelos 3D en formato GLTF

const GLoader = new GLTFLoader();
GLoader.load("assets/prueba_ensamble_anim.glb", function (gltf) {

  let animations = gltf.animations;

  gltf.scene;
  gltf.scenes;
  gltf.cameras;

  const model = gltf.scene;

  for(let i = 0; i <= 8; i++)
  {
    Anim_2[i] = mixer.clipAction(animations[i], model); 
  }

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

//-----------------------------------------------------------------------



//Función "animate" y llamado a la función para poner todo en marcha

function animate(t = 0)
{
  requestAnimationFrame(animate);

  //mesh.rotation.y = t*0.0001;

  labelRenderer.render(scene, camera);

  renderer.render(scene, camera);

  mixer.update(1/15);

  controls.update();
}

animate();

//-------------------------------------------------------------------------
