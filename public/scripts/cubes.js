var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer1 = new THREE.WebGLRenderer();

renderer1.setSize(window.innerWidth, window.innerHeight);
renderer1.setClearColor( 0xffffff, 1);
document.body.appendChild(renderer1.domElement);


var boxGeometry111 = new THREE.BoxGeometry(1,1,1);
var blackWireframe = new THREE.MeshBasicMaterial( {
    color: 0x000000,
    wireframe: true,
});

var cube = new THREE.Mesh(boxGeometry111, blackWireframe);
var cube2 = new THREE.Mesh(boxGeometry111, blackWireframe);

scene.add(cube);
scene.add(cube2);
cube.position.set(-4,0,0);
cube2.position.set(4,0,0);

camera.position.z = 5;

var update = function() {
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    cube2.rotation.x += 0.005;
    cube2.rotation.y += 0.005;
}
var render = function() {
    renderer1.render(scene, camera);
}
var GameLoop = function() {
    requestAnimationFrame(GameLoop);
    update();
    render();
}

GameLoop();