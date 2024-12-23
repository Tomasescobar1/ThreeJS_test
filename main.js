

import * as THREE from "three";
import { OrbitControls, ThreeMFLoader } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import gsap from "gsap";

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

//console.log(camera.position);

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
dofiPNG.setAttribute('class', 'stylePNG');

const video = document.createElement('video');
document.getElementById('finishVideo').appendChild(video);
video.setAttribute('id', 'confetti');
video.setAttribute('src', 'assets/confetti.webm');
video.setAttribute('class', 'confettiVideo');
video.setAttribute('style', 'visibility: hidden');


//-------------------------------------------------------------------

// Lista de pasos de las instrucciones

let step = [];

let stepObject = [];

for(let i = 0; i <= 9; i++)
{
  step[i] = document.createElement('p');
}

for(let i = 0; i <= 9; i++)
{

  switch(i)
  {
    case 0:

      document.getElementById('step1_d').appendChild(step[0]);
      step[0].setAttribute('id', 'step-one');
      stepObject[0] = document.getElementById('step1_d');
      step[0].textContent = 'Paso # 1. Posicione la pieza lateral izquierda.';

    break;

    case 1:

      document.getElementById('step2_d').appendChild(step[1]);
      step[1].setAttribute('id', 'step-two');
      stepObject[1] = document.getElementById('step2_d');
      step[1].textContent = 'Paso # 2. posicione y ajuste la repisa inferior.';

    break;

    case 2:

      document.getElementById('step3_d').appendChild(step[2]);
      step[2].setAttribute('id', 'step-three');
      stepObject[2] = document.getElementById('step3_d');
      step[2].textContent = 'Paso # 3. posicione y ajuste la repisa superior.';

    break;

    case 3:

      document.getElementById('step4_d').appendChild(step[3]);
      step[3].setAttribute('id', 'step-four');
      stepObject[3] = document.getElementById('step4_d');
      step[3].textContent = 'Paso # 4. posicione la pieza lateral derecha.';

    break;

    case 4:

      document.getElementById('step5_d').appendChild(step[4]);
      step[4].setAttribute('id', 'step-five');
      stepObject[4] = document.getElementById('step5_d');
      step[4].textContent = 'Paso # 5. posicione y ajuste el braguero frontal.';

    break;


    case 5:

      document.getElementById('step6_d').appendChild(step[5]);
      step[5].setAttribute('id', 'step-six');
      stepObject[5] = document.getElementById('step6_d');
      step[5].textContent = 'Paso # 6. Coloque las puertas del gabinete.';

    break;

    case 6:

      document.getElementById('step7_d').appendChild(step[6]);
      step[6].setAttribute('id', 'step-seven');
      stepObject[6] = document.getElementById('step7_d');
      step[6].textContent = 'Paso # 7. posicione y ajuste el braguero posterior.';

    break;

    case 7:

      document.getElementById('step8_d').appendChild(step[7]);
      step[7].setAttribute('id', 'step-eight');
      stepObject[7] = document.getElementById('step8_d');
      step[7].textContent = 'Paso # 8. Coloque en su lugar el lavamanos.';

    break;

    case 8:

      document.getElementById('step9_d').appendChild(step[8]);
      step[8].setAttribute('id', 'step-nine');
      stepObject[8] = document.getElementById('step9_d');
      step[8].textContent = 'Paso # 9. inserte y ajuste la grifería.';

    break;

    case 9:

      document.getElementById('congrats').appendChild(step[9]);
      step[9].setAttribute('id', 'congrats_step');
      stepObject[9] = document.getElementById('congrats');
      step[9].textContent = '¡Felicitaciones!';

    break;
  }

}

const congratsLabel = new CSS2DObject(step[9]);

// Botón para avanzar al paso siguiente

const nextStepButton = document.createElement('button');
document.getElementById("Next").appendChild(nextStepButton);
nextStepButton.setAttribute('id', 'toNext');
nextStepButton.setAttribute('style', 'border: none;')
const nextbuttonImg = document.createElement('img');
document.getElementById("toNext").appendChild(nextbuttonImg);
nextbuttonImg.setAttribute('src', 'assets/Siguiente.png');
nextbuttonImg.setAttribute('id', 'nextImg');

const nextLabel = new CSS2DObject(nextStepButton);
scene.add(nextLabel);
nextLabel.position.set(0, -1.3, 0);
let nextButton = document.getElementById("toNext");

for(let i = 0; i <=9; i++)
{
  stepObject[i].setAttribute('style', 'visibility: hidden');
}

function stepSignTrigger(input)
{
  stepObject[input].setAttribute('style', 'visibility: visible');
}

function stepSingHide(input)
{
  stepObject[input].setAttribute('style', 'visibility: hidden');
}

function stepButtonVar()
{
  console.log(value1);

  if(value1 <= 10)
  {
    switch(value1)
    {

      case 0:

        Anim_2[2].setLoop(THREE.LoopOnce);
        
        Anim_2[2].clampWhenFinished = true;

        console.log(camera.position);

        gsap.to(camera.position, {x: -1.8056, y: 1.7763, z: 1.4579, duration: 1.5});

        Anim_2[2].play();
        
        mixer.addEventListener('finished', function(e) {stepSignTrigger(0)});

      break;
      
      case 1:

        stepSingHide(0);

        step[0].setAttribute('style', 'display:none');

        Anim_2[8].setLoop(THREE.LoopOnce);
        
        Anim_2[8].clampWhenFinished = true;

        gsap.to(camera.position, {x: 1.5113, y: 1.4852, z: 0.8665, duration: 1.5});

        console.log(camera.position);

        Anim_2[8].play();

        mixer.addEventListener('finished', function(e) {stepSignTrigger(1)});

      break;

      case 2:

        stepSingHide(1);

        step[1].setAttribute('style', 'display:none');

        Anim_2[7].setLoop(THREE.LoopOnce);
        
        Anim_2[7].clampWhenFinished = true;

        console.log(camera.position);

        Anim_2[7].play();

        mixer.addEventListener('finished', function(e) {stepSignTrigger(2)});

      break;

      case 3:

        stepSingHide(2);

        step[2].setAttribute('style', 'display:none');

        Anim_2[3].setLoop(THREE.LoopOnce);
        
        Anim_2[3].clampWhenFinished = true;

        gsap.to(camera.position, {x: 2.6211, y: 2.5702, z: 1.9897, duration: 1.5});

        console.log(camera.position);

        Anim_2[3].play();

        mixer.addEventListener('finished', function(e) {stepSignTrigger(3)});

      break;

      case 4:

        stepSingHide(3);

        step[3].setAttribute('style', 'display:none');

        Anim_2[4].setLoop(THREE.LoopOnce);
        
        Anim_2[4].clampWhenFinished = true;

        gsap.to(camera.position, {x: 1.3078, y: 1.6382, z: 1.0898, duration: 1.5});

        console.log(camera.position);

        Anim_2[4].play();

        mixer.addEventListener('finished', function(e) {stepSignTrigger(4)});

      break;

      case 5:

        stepSingHide(4);

        step[4].setAttribute('style', 'display:none');

        Anim_2[5].setLoop(THREE.LoopOnce);
        
        Anim_2[5].clampWhenFinished = true;

        console.log(camera.position);

        Anim_2[5].play();

        mixer.addEventListener('finished', function(e) {stepSignTrigger(5)});

      break;

      case 6:

        stepSingHide(5);

        step[5].setAttribute('style', 'display:none');

        Anim_2[6].setLoop(THREE.LoopOnce);
        
        Anim_2[6].clampWhenFinished = true;

        gsap.to(camera.position, {x: 1.5736, y: 1.9394, z: -1.3051, duration: 1.5});

        console.log(camera.position);

        Anim_2[6].play();

        mixer.addEventListener('finished', function(e) {stepSignTrigger(6)});

      break;

      case 7:

        stepSingHide(6);

        step[6].setAttribute('style', 'display:none');

        Anim_2[1].setLoop(THREE.LoopOnce);
        
        Anim_2[1].clampWhenFinished = true;

        gsap.to(camera.position, {x: 1.2141, y: 2.0671, z: -0.9513, duration: 1.5});

        console.log(camera.position);

        Anim_2[1].play();

        mixer.addEventListener('finished', function(e) {stepSignTrigger(7)});

      break;

      case 8:

        stepSingHide(7);

        step[7].setAttribute('style', 'display:none');

        Anim_2[0].setLoop(THREE.LoopOnce);
        
        Anim_2[0].clampWhenFinished = true;

        gsap.to(camera.position, {x: -1.2461, y: 2.2109, z: 1.4713, duration: 1.5});

        console.log(camera.position);

        Anim_2[0].play();

        mixer.addEventListener('finished', function(e) {stepSignTrigger(8)});

      break;

      case 9:

        stepSingHide(8);

        step[8].setAttribute('style', 'display:none');

        video.setAttribute('style', 'visibility: visible');

        video.play();

        gsap.to(camera.position, {x: -2.5, y: 2.5, z: 2, duration: 1.5});

        stepSignTrigger(9);

        congratsLabel.position.set(0, 0.3, 0);

        scene.add(congratsLabel);

      break;

    }

    value1++;

  }
  
}

nextButton.addEventListener('click', function(e) {stepButtonVar()});

//--------------------------------------------------------------------



// Botón para volver al inicio

const resetButton = document.createElement('button');
document.getElementById("Reset").append(resetButton);
resetButton.setAttribute('id', 'toReset');
resetButton.setAttribute('style', 'border: none');
const resetButtonImg = document.createElement('img');
resetButtonImg.setAttribute('id', 'resetImg');
document.getElementById("toReset").appendChild(resetButtonImg);
resetButtonImg.setAttribute('src', 'assets/Restart.png');

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

  gsap.to(camera.position, {x: -4, y: 4, z: 3, duration: 1.5, onComplete: () => location.reload()});

  mixer.setTime(0);

  for(let i = 0; i <= 9; i++)
  {
    step[i].setAttribute('style', 'display: none');

    stepObject[i].setAttribute('style', 'visibility: hidden');
  }

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
