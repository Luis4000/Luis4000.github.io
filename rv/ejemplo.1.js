function Pierna(){
TRHEE.Object3D.call(this);
//Mallas para pierna y pie
this.pierna=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
this.pie=new THREE.Mesh(new THREE.BoxGeometry(2,1,1));

//Posicion de mallas
this.pierna.position.y=-2.5;
this.pie.position.y=-4.5;
this.pie.position.x=1;

//Se agrega el objeto 3d para conformar una unidad y se termina la definicion del constructor
this.add(this.pierna);
this.add(this.pie);
}

//Se establece la herencia entre la pierna y el object 3d
Pierna.prototype=new THREE.Object3D();

//Se procede a definir la funcion de inicializacion del mundo virtual
function setup(){
var cuerpo=new THREE.Mesh(new THREE.CylinderGeometry(1,2,5,10));
piernaD=new Pierna();
piernaI=new Pierna();

//El cuerpo y las piernas se desplazan a posiciones deseadas
cuerpo.position.y=2;
piernaD.position.z=-1;
piernaI.position.z=1;

//Determinamos que tanto van a rotar las figuras en un momento dado
step=.01;

//Definimos la escena
escena=new THREE.Scene();
escena.add(cuerpo);
escena.add(piernaD);
escena.add(piernaI);

//Agregamos camara y renderer
camara=new THREE.PerspectiveCamera();
camara.position.z=20;
renderer =new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(render.domElement);
}

//Loop
requestAnimationFrame(loop);
renderer.render(escena,camara);
if (Math.abs(piernaD.rotation.z)>.5)
  step=-step;
  piernaD.rotation.z+=step;
  piernaI.rotation.z-=step;
}

//Se declaran simbolos globales y se ejecuta setup y loop
var escena,camara,renderer;
var step, piernaD,piernaI;
setup();
loop();
