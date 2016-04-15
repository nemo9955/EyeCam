/// <reference path="../typings/three.js-r74/three.d.ts" />
/// <reference path="../typings/three.js-r74/three-editorcontrols.d.ts" />
/// <reference path="../typings/three.js-r74/three-trackballcontrols.d.ts" />

/**
*	created by Mogoi Adrian
*
*	15.4.2016  
*/


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, screenRealX() / screenRealY(), 0.1, 1000);
var renderer = new THREE.WebGLRenderer(); document.body.appendChild(renderer.domElement);

var camContr = new THREE.EditorControls(camera, renderer.domElement)
var dragContr = new (<any>THREE).DragControls(camera, scene, renderer.domElement)


function preLoading() {


    window.addEventListener('resize', resizeWindow, false);

    postLoading()

}

var cube: THREE.Mesh;
function postLoading() {
    addProps()


    camera.position.x = 55;
    camera.position.y = 40;
    camera.position.z = 50;
    camera.lookAt(scene.position)
    
    //TODO activeaza cand este deasupra unui obiect mutabil
    // dragContr.activate()
    // dragContr.enabled = true;

    // camContr.enabled = false;

    resizeWindow()
    renderFrame();
}

function addProps() {
    createSceneProps()

    var geometry = new THREE.BoxGeometry(10, 10, 10);
    var material = new THREE.MeshStandardMaterial({ color: 0x00ffff, blending: 0.5 });
    cube = new THREE.Mesh(geometry, material);
    cube.position.y = 12
    scene.add(cube);


}


function createSceneProps() {

    let h1 = new THREE.AxisHelper(40)
    let h2 = new THREE.GridHelper(200, 40)
    h1.name = "~helper"
    h2.name = "~helper"
    h2.material.transparent = true
    h2.material.opacity = 0.2
    scene.add(h1);
    scene.add(h2);


    var ambientLight = new THREE.AmbientLight(0xcccccc);
    ambientLight.name = "~ambientLight"
    ambientLight.color = new THREE.Color(0.8, 0.8, 0.8)
    scene.add(ambientLight);

    var dirL = new THREE.DirectionalLight(0x222222);
    dirL.position.y = 300;
    dirL.position.x = 800;
    dirL.position.z = 600;
    dirL.color = new THREE.Color(0.2, 0.2, 0.2)
    dirL.intensity = 1;
    dirL.name = "~dirLight"
    scene.add(dirL);
}


function renderFrame() {

    renderer.setClearColor(0xdddddd, 1);
    renderer.render(scene, camera);

    requestAnimationFrame(renderFrame);
}

function screenRealX() { return window.innerWidth - 50 };
function screenRealY() { return window.innerHeight - 110 };

function resizeWindow() {
    camera.aspect = screenRealX() / screenRealY();
    camera.updateProjectionMatrix()
    renderer.setSize(screenRealX(), screenRealY());

}

preLoading()

