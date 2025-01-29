import {getThreeAccess} from "./threeDRenderScript.js";
import * as THREE from "./three.module.min.js"

export const floorMesh = () =>{
    const threeAccess = getThreeAccess();
    const loader = new THREE.TextureLoader();
    const floorTexture = loader.load('./assets/image/floor2.png'); 

    const geometry = new THREE.PlaneGeometry(200, 200);
    const material = new THREE.MeshStandardMaterial({
        //  color: "grey", //side: THREE.DoubleSide ,
         map: floorTexture 
        });
    const plane = new THREE.Mesh(geometry, material);

    plane.receiveShadow = true;

    plane.rotateX(-Math.PI / 2);

    plane.position.set(0, -5 ,0)

    threeAccess.scene.add(plane);
}

export const batmanFlat = () =>{
    const threeAccess = getThreeAccess();
    const loader = new THREE.TextureLoader();
    const batmanTexture = loader.load('./assets/image/batman.png');

    const geometry = new THREE.PlaneGeometry(10, 17.8);
    const material = new THREE.MeshStandardMaterial({
        //  color: "grey", //side: THREE.DoubleSide ,
         map: batmanTexture ,
         side: THREE.DoubleSide
        });
        material.transparent = true;
    const plane = new THREE.Mesh(geometry, material);

    plane.receiveShadow = true;

    plane.rotateX(-Math.PI / 2);
    plane.rotateY(Math.PI / 2);
    plane.rotateZ(Math.PI / 2);

    plane.position.set(-40, 3 , 20)

    threeAccess.scene.add(plane);
}