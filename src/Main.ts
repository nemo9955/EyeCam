/// <reference path="../typings/three.js-r74/three.d.ts" />

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, screenRealX() / screenRealY(), 0.1, 1000);
var renderer = new THREE.WebGLRenderer();



function preLoading() {

    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

    postLoading()

}

var cube: THREE.Mesh;
function postLoading() {

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    onWindowResize()
    renderFrame();
}


function renderFrame() {


    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;



    renderer.setClearColor(0xdddddd, 1);
    renderer.render(scene, camera);

    requestAnimationFrame(renderFrame);
}

function screenRealX() { return window.innerWidth - 50 };
function screenRealY() { return window.innerHeight - 110 };

function onWindowResize() {
    camera.aspect = screenRealX() / screenRealY();
    camera.updateProjectionMatrix()
    renderer.setSize(screenRealX(), screenRealY());

}

preLoading()

