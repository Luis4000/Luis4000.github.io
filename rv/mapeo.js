function setup() {

	cubo1= new THREE.Mesh(new THREE.BoxGeometry(1,32,10),new THREE.MeshPhongMaterial({color:'#00cc00'}));
	cubo2= new THREE.Mesh(new THREE.BoxGeometry(1,32,10),new THREE.MeshPhongMaterial({color:'#00cc00'}));
cubo3= new THREE.Mesh(new THREE.BoxGeometry(32,1,10),new THREE.MeshPhongMaterial({color:'#00cc00'}));
	cubo4= new THREE.Mesh(new THREE.BoxGeometry(32,1,10),new THREE.MesPhongMaterial({color:'#00cc00'}));
pelota= new THREE.Mesh(new THREE.SphereGeometry(0.5),new THREE.MeshNormalMaterial());
	
	cubo1.position.x=16;
	cubo2.position.x=-16;
	cubo3.position.y=16;
	cubo4.position.y=-16;
	camara = new THREE.PerspectiveCamera();
	camara.position.z=70;
	camara.position.y=10;

	raycaster1= new THREE.Raycaster(pelota.position, new THREE.Vector3(1,0,0));
	raycaster2= new THREE.Raycaster(pelota.position, new THREE.Vector3(-1,0,0));	

	//raycaster1= new THREE.Raycaster(pelota.position, new THREE.Vector3(1,0,0));


	
	escena= new THREE.Scene();
	escena.add(cubo1);
	escena.add(cubo2);
	escena.add(cubo3);
	escena.add(cubo4);
	escena.add(camara);
	escena.add(pelota);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
 	document.body.appendChild(renderer.domElement);
	step=0.2;

 }


function loop() {

	obstaculo1= raycaster.intersectObject(cubo1);
	obstaculo2= raycaster.intersectObject(cubo2);
	obstaculo3= raycaster.intersectObject(cubo3);
	obstaculo4= raycaster.intersectObject(cubo4);




if ((obstaculo3.length>0) && (obstaculo3[0].distance<=3)){
    dir=2;
    raycaster.set(pelota.position,new THREE.Vector3(1,0,0));
  }
  
  if ((obstaculo1.length>0) && (obstaculo1[0].distance<=3)){
    dir=3;
    raycaster.set(pelota.position,new THREE.Vector3(0,-1,0));
  }
 if ((obstaculo4.length>0) && (obstaculo4[0].distance<=3)){
    dir=4;
    raycaster.set(pelota.position,new THREE.Vector3(-1,0,0));
  }
  
  if ((obstaculo2.length>0) && (obstaculo2[0].distance<=3)){
    dir=1;
    raycaster.set(pelota.position,new THREE.Vector3(0,1,0));
  }

  
  if (dir==1){
    
     pelota.position.y+=step;
  }
  else if(dir==2){
     pelota.position.x+=step;
  }
  else if(dir==3){
    pelota.position.y-=step;
  }
  else if(dir==4){
    pelota.position.x-=step;
  }
 	

requestAnimationFrame(loop);
renderer.render(escena,camara);
}

var escena, camara, renderer, cubo1, cubo2,cubo3,cubo4, pelota;
var raycaster, dir;
var obstaculo1, obstaculo2,obstaculo3,obstaculo4;

dir=1;
setup();
loop();
