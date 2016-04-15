/// <reference path="../typings/three.js-r74/three.d.ts" />
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, screenRealX() / screenRealY(), 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
function preLoading() {
    document.body.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
    postLoading();
}
var cube;
function postLoading() {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    onWindowResize();
    renderFrame();
}
function renderFrame() {
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.setClearColor(0xdddddd, 1);
    renderer.render(scene, camera);
    requestAnimationFrame(renderFrame);
}
function screenRealX() { return window.innerWidth - 50; }
;
function screenRealY() { return window.innerHeight - 110; }
;
function onWindowResize() {
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