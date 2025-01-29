import {getThreeAccess} from "./threeDRenderScript.js";
import * as THREE from "./three.module.min.js"
// import  FakeGlowMaterial from "./FakeGlowMaterial.js"

const video1 = document.createElement('video');
video1.src = './assets/video/vid1.mp4';  // Replace with your video file
video1.loop = true;
video1.muted = true; // Autoplay requires muted videos
video1.playsInline = true;
video1.play();  // Start playing

const video2 = document.createElement('video');
video2.src = './assets/video/vid2.mp4';  // Replace with your video file
video2.loop = true;
video2.playsInline = true;
video2.muted = true; // Autoplay requires muted videos
video2.play();  // Start playing

export const getVideo1 = () => video1;

export const billboard = () =>{
    const threeAccess = getThreeAccess();

    const videoTexture = new THREE.VideoTexture(video1);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;
    
    const videoMaterial = new THREE.MeshBasicMaterial({ map: videoTexture });

    // const fakeGlow = new FakeGlowMaterial({glowColor:"red"})

    const geometry = new THREE.BoxGeometry( 30.2 , 20.7 , .5 , 1); 
    const material = new THREE.MeshStandardMaterial( {color: "#333" , metalness:0.5 , roughness:0.3} ); 
    threeAccess.billboard = new THREE.Mesh( geometry, videoMaterial); 

    threeAccess.billboard.rotation.y = Math.PI / 3;

    threeAccess.billboard.position.set(-40 , (-5 + 10.7 + 10) , -10)

    threeAccess.scene.add( threeAccess.billboard );
}

export const billboard2 = () =>{
    const threeAccess = getThreeAccess();

    const videoTexture = new THREE.VideoTexture(video2);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;
    
    const videoMaterial = new THREE.MeshBasicMaterial({ map: videoTexture });

    const geometry = new THREE.BoxGeometry( 30.2 , 20.7 , .5 , 1); 
    const material = new THREE.MeshStandardMaterial( {color: "#333" , metalness:0.5 , roughness:0.3} ); 
    threeAccess.billboard = new THREE.Mesh( geometry, videoMaterial ); 

    threeAccess.billboard.rotation.y = Math.PI / 2;

    threeAccess.billboard.position.set(-48 , (-5 + 10.7 + 10) , 20)

    threeAccess.scene.add( threeAccess.billboard );
}