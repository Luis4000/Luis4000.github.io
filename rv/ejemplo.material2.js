function setup(){
var forma=new THREE.BoxGeometry(1,1,1);
var material=new THREE.MeshNormalMaterial();
malla=new THREE.Mesh(forma, material);

escena=new THREE.Scene();
escena.add(malla);

camara=new THREE.PerspectiveCamera();
camara.position.z=5;
renderer =new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}
//Loop
function loop(){
requestAnimationFrame(loop);
malla.rotation.x +=0.01;
malla.rotation.y +=0.01;
renderer.render(escena,camara);
}

//Se declaran simbolos globales y se ejecuta setup y loop
var escena,camara,renderer, malla;
setup();
loop();