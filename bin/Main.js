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
var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
var camContr = new THREE.EditorControls(camera, renderer.domElement);
var dragContr = new THREE.DragControls(camera, scene, renderer.domElement);
function preLoading() {
    window.addEventListener('resize', resizeWindow, false);
    postLoading();
}
var cube;
function postLoading() {
    addProps();
    camera.position.x = 55;
    camera.position.y = 40;
    camera.position.z = 50;
    camera.lookAt(scene.position);
    //TODO activeaza cand este deasupra unui obiect mutabil
    // dragContr.activate()
    // dragContr.enabled = true;
    // camContr.enabled = false;
    resizeWindow();
    renderFrame();
}
function addProps() {
    createSceneProps();
    var geometry = new THREE.BoxGeometry(10, 10, 10);
    var material = new THREE.MeshStandardMaterial({ color: 0x00ffff, blending: 0.5 });
    cube = new THREE.Mesh(geometry, material);
    cube.position.y = 12;
    scene.add(cube);
}
function createSceneProps() {
    var h1 = new THREE.AxisHelper(40);
    var h2 = new THREE.GridHelper(200, 40);
    h1.name = "~helper";
    h2.name = "~helper";
    h2.material.transparent = true;
    h2.material.opacity = 0.2;
    scene.add(h1);
    scene.add(h2);
    var ambientLight = new THREE.AmbientLight(0xcccccc);
    ambientLight.name = "~ambientLight";
    ambientLight.color = new THREE.Color(0.8, 0.8, 0.8);
    scene.add(ambientLight);
    var dirL = new THREE.DirectionalLight(0x222222);
    dirL.position.y = 300;
    dirL.position.x = 800;
    dirL.position.z = 600;
    dirL.color = new THREE.Color(0.2, 0.2, 0.2);
    dirL.intensity = 1;
    dirL.name = "~dirLight";
    scene.add(dirL);
}
function renderFrame() {
    renderer.setClearColor(0xdddddd, 1);
    renderer.render(scene, camera);
    requestAnimationFrame(renderFrame);
}
function screenRealX() { return window.innerWidth - 50; }
;
function screenRealY() { return window.innerHeight - 110; }
;
function resizeWindow() {
    camera.aspect = screenRealX() / screenRealY();
    camera.updateProjectionMatrix();
    renderer.setSize(screenRealX(), screenRealY());
}
preLoading();
/*
The MIT License

Copyright (c) 2010-2013 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
/// <reference path="./tests/math/test_unit_math.ts" />
// webGL renderer test.
/// <reference path="./tests/webgl/webgl_animation_cloth.ts" />
/// <reference path="./tests/webgl/webgl_animation_skinning_morph.ts" />
/// <reference path="./tests/webgl/webgl_buffergeometry.ts" />
/// <reference path="./tests/webgl/webgl_camera.ts" />
/// <reference path="./tests/webgl/webgl_custom_attributes.ts" />
/// <reference path="./tests/webgl/webgl_geometries.ts" />
/// <reference path="./tests/webgl/webgl_helpers.ts" />
/// <reference path="./tests/webgl/webgl_interactive_cubes.ts" />
/// <reference path="./tests/webgl/webgl_interactive_raycasting_points.ts" />
/// <reference path="./tests/webgl/webgl_lensflares.ts" />
/// <reference path="./tests/webgl/webgl_lights_hemisphere.ts" />
/// <reference path="./tests/webgl/webgl_lines_colors.ts" />
/// <reference path="./tests/webgl/webgl_loader_awd.ts" />
/// <reference path="./tests/webgl/webgl_materials.ts" />
/// <reference path="./tests/webgl/webgl_morphtargets.ts" />
/// <reference path="./tests/webgl/webgl_points_billboards.ts" />
/// <reference path="./tests/webgl/webgl_postprocessing.ts" />
/// <reference path="./tests/webgl/webgl_shader.ts" />
/// <reference path="./tests/webgl/webgl_sprites.ts" />
// css3d renderer test.
/// <reference path="./tests/css3d/css3d_periodictable.ts" />
/// <reference path="./tests/css3d/css3d_sprites.ts" />
// canvas renderer test.
/// <reference path="./tests/canvas/canvas_camera_orthographic.ts" />
/// <reference path="./tests/canvas/canvas_geometry_cube.ts" />
/// <reference path="./tests/canvas/canvas_interactive_cubes_tween.ts" />
/// <reference path="./tests/canvas/canvas_lights_pointlights.ts" />
/// <reference path="./tests/canvas/canvas_materials.ts" />
/// <reference path="./tests/canvas/canvas_particles_floor.ts" />
// examples test
/// <reference path="./tests/examples/detector.ts" />
/// <reference path="./tests/examples/effects/vreffect.ts" />
/// <reference path="./tests/examples/controls/vrcontrols.ts" />
//# sourceMappingURL=Main.js.map