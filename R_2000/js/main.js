// Variaveis globais
var lib = THREE, scene, camera, renderer, controls, clock, projector, model, skin;

// Semi-constants
var WIDTH = window.innerWidth,
	HEIGHT = window.innerHeight,
	ASPECT = WIDTH / HEIGHT,
	UNITSIZE = 250,
	WALLHEIGHT = UNITSIZE / 3,
	MOVESPEED = 500,
	LOOKSPEED = 0.075,

	BULLETMOVESPEED = MOVESPEED * 5,
	NUMAI = 5,
	PROJECTILEDAMAGE = 20;
scene = new lib.Scene();
//var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// Set up camera
camera = new lib.PerspectiveCamera(60, ASPECT, 1, 10000); // FOV, aspect, near, far
camera.position.y = UNITSIZE * .2;
scene.add(camera);

// Camera moves with mouse, flies around with WASD/arrow keys
controls = new lib.FirstPersonControls(camera);
controls.movementSpeed = MOVESPEED;
controls.lookSpeed = LOOKSPEED;
scene.fog = new lib.FogExp2(0xD6F1FF, 0.0005); // color, density

var speed =  0.1;

var renderer = new lib.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new lib.BoxGeometry( 1, 1, 1 );
var material = new lib.MeshBasicMaterial( { color: 0x00ff11 } );
var cube = new lib.Mesh( geometry, material );
scene.add( cube );


var geometry = new lib.BoxGeometry( 1, 1, 1 );
var material = new lib.MeshBasicMaterial( { color: 0xF0FF5E } );
var cube2 = new lib.Mesh( geometry, material );
scene.add( cube2 );

var geometry = new lib.PlaneGeometry( 5, 20, 32 );
var material = new lib.MeshBasicMaterial( {color: 0xffff00, side: lib.DoubleSide} );
var plane = new lib.Mesh( geometry, material );
//scene.add( plane );
plane.position.y = 0;
plane.rotation.x = 180;
camera.position.z = 5;


this.onKeyDown = function ( event ) {

		switch( event.keyCode ) {

			case 38: /*up*/
			case 87: /*W*/ this.moveForward = true; break;

			case 37: /*left*/
			case 65: /*A*/ this.moveLeft = true; break;

			case 40: /*down*/
			case 83: /*S*/ this.moveBackward = true; break;

			case 39: /*right*/
			case 68: /*D*/ this.moveRight = true; break;

			case 82: /*R*/ this.moveUp = true; break;
			case 70: /*F*/ this.moveDown = true; break;

			case 81: /*Q*/ this.freeze = !this.freeze; break;

		}

};

var animate = function () {
  requestAnimationFrame( animate );


  //cube.rotation.x += 0.1;
  //cube.rotation.y += 0.1;

  cube.position.z  += speed;

  if (cube.position.z > 5 || cube.position.z < -5){
      speed = speed * -1;
  }

  renderer.render(scene, camera);
};

this.domElement.addEventListener( 'mousemove', bind( this, this.onMouseMove ), false );
this.domElement.addEventListener( 'mousedown', bind( this, this.onMouseDown ), false );

animate();
