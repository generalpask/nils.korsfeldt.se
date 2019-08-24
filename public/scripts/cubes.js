/*
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer1.setSize(window.innerWidth, window.innerHeight);
renderer1.setClearColor( 0xffffff, 1);
document.body.appendChild(renderer1.domElement);

var L1 = new THREE.PointLight( 0xffffff, 1);
L1.position.z = 100;
L1.position.y = 100;
L1.position.x = 100;
scene.add(L1);

var L2 = new THREE.PointLight( 0xffffff, 0.8);
L2.position.z = 200;
L2.position.y = 50;
L2.position.x = -100;
scene.add(L2);

var box111 = new THREE.BoxGeometry(1,1,1);
var icosahedron10 = new THREE.IcosahedronGeometry(1,0);
var blackWireframe = new THREE.MeshBasicMaterial( {
    color: 0x000000,
    wireframe: true,
});
var black = new THREE.MeshBasicMaterial( {
    color: 0x000000,
});
var white = new THREE.MeshBasicMaterial( {
    color: 0xffffff,
})
var reflectiveBlack = new THREE.MeshPhongMaterial( {
    color: 0x000000,
})



var cube = new THREE.Mesh(box111, reflectiveBlack);
var cube2 = new THREE.Mesh(box111, reflectiveBlack);
var icosahedron = new THREE.Mesh(icosahedron10, blackWireframe);

var edges = new THREE.LineSegments(box111, white);
cube.add(edges);


scene.add(cube);
scene.add(cube2);
scene.add(icosahedron);
scene.add(edges);
cube.position.set(-4,0,0);
cube2.position.set(4,0,0);
icosahedron.position.set(-4,2,0);

camera.position.z = 5;

var update = function() {
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    cube2.rotation.x += 0.005;
    cube2.rotation.y += 0.005;
    icosahedron.rotation.x += 0.005;
    icosahedron.rotation.y += 0.005;
}
var render = function() {
    renderer.render(scene, camera);
}
var GameLoop = function() {
    requestAnimationFrame(GameLoop);
    update();
    render();
}

GameLoop();
*/
var $container = $('.main');
var renderer = new THREE.WebGLRenderer({antialias: true});
var camera = new THREE.PerspectiveCamera(80,1,0.1,10000);
var scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(window.innerHeight, window.innerHeight);
renderer.setClearColor( 0xffffff, 1);
$container.append(renderer.domElement);

///////////////////////////////////////////////

// Camera
camera.position.z = 200;

// Material
var pinkMat = new THREE.MeshPhongMaterial({
  color      :  new THREE.Color("rgb(226,35,213)"),
  emissive   :  new THREE.Color("rgb(255,128,64)"),
  specular   :  new THREE.Color("rgb(255,155,255)"),
  shininess  :  10,
  shading    :  THREE.FlatShading,
  transparent: 1,
  opacity    : 1
});

var L1 = new THREE.PointLight( 0xffffff, 1);
L1.position.set(100, 100, 100);
scene.add(L1);

var L2 = new THREE.PointLight( 0xffffff, 0.8);
L2.position.set(-100, 50, 200);
scene.add(L2);


var Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(60,0), pinkMat);
Ico.rotation.z = 0.5;
scene.add(Ico);

function update(){
   Ico.rotation.x+=2/100;
   Ico.rotation.y+=2/100;
}

// Render
function render() {
  requestAnimationFrame(render);			
  renderer.render(scene, camera);	
  update();
}

render();