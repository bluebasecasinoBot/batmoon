import { __v } from "../sydneyDom_v2.js";
import * as THREE from "./three.module.min.js"
import {OrbitControls} from "./OrbitControls.js"
import { FontLoader } from "./FontLoader.js";
import {TextGeometry } from "./TextGeometry.js";
import { billboard , billboard2} from "./billBoard.js";
import { buildings } from "./buildingsEnvironment.js";
import { floorMesh , batmanFlat } from "./floorMesh.js";

const threeAccess = {
    renderer:null,
    camera:null,
    scene:null,
    billboard:null,
    controls:null
}

export const getThreeAccess = () => threeAccess;

export function MainRenderInit()
{
    threeAccess.scene = new THREE.Scene();

    threeAccess.camera = new THREE.PerspectiveCamera(75 , (window.innerWidth < 700 ? 700 : window.innerWidth) / window.innerHeight , .1 , 1000);

    threeAccess.renderer = new THREE.WebGLRenderer({
        canvas:__v['MainCanvas']
    })

    const nightSkyScene = new THREE.TextureLoader().load('./assets/image/night2.png');
    threeAccess.scene.background = nightSkyScene;
    
    threeAccess.renderer.setPixelRatio(window.devicePixelRatio);
    threeAccess.renderer.setSize((window.innerWidth < 700 ? 700 : window.innerWidth) , window.innerHeight);
    threeAccess.camera.position.setZ(60);
    threeAccess.camera.position.setY(50);
    
    threeAccess.camera.lookAt(0,0,0)

    threeAccess.renderer.shadowMap.enabled = true;
    
    threeAccess.renderer.render(threeAccess.scene , threeAccess.camera);

    const pointLight1 = new THREE.PointLight(0xffffff, 3, 300);
    const pointLight2 = new THREE.PointLight(0xffffff, 3, 300);
    const ambientLight = new THREE.AmbientLight(0xffffff , 2);
    pointLight1.position.set(-40 , 30 , -5);
    pointLight2.position.set(-50 , 30 , 20);

    threeAccess.scene.add(pointLight1 , pointLight2 , ambientLight);

    const lightHelper1 = new THREE.PointLightHelper(pointLight1);//pointLight2
    const lightHelper2 = new THREE.PointLightHelper(pointLight2);

    // const gridHelper = new THREE.GridHelper(200 , 50);

    threeAccess.scene.add(lightHelper1)//gridHelper , 
    threeAccess.scene.add(lightHelper2)//gridHelper , 

    threeAccess.controls = new OrbitControls(threeAccess.camera , threeAccess.renderer.domElement);

    billboard();
    billboard2();
    buildings();
    floorMesh();
    batmanFlat();

    //render 3d text
    const fontLoader = new FontLoader();
    fontLoader.load('./assets/font/Comicker_Regular.json' , font =>{
        const textGeometry = new TextGeometry('BAT MOON' , {
            font:font,
            size:10,
            height: 1,   // Reduce this to make the text thinner (was likely too high)
            curveSegments: 12,  // Smoothness of curves
            bevelEnabled: true, // Optional: Adds smooth rounded edges
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelSegments: 5
        });

        const textMaterial = new THREE.MeshStandardMaterial({color:0x00ff00});
        const text = new THREE.Mesh(textGeometry , [
            new THREE.MeshPhongMaterial({color:"#fff"}),
            new THREE.MeshPhongMaterial({color:"#171717"}),
        ]);
        text.scale.set(1, 1, 0.1)
        text.position.set(30 , 20 , -40);
        text.rotation.y = -Math.PI / 2;
        // text.rotation.z = Math.PI / 2;
        threeAccess.scene.add(text);
    })
    //render 3d text

    animate();
}

function animate()
{
    requestAnimationFrame(animate);

    // threeAccess.billboard.rotation.x += 0.01;
    // threeAccess.billboard.rotation.y += 0.005;
    // threeAccess.billboard.rotation.z += 0.01;

    threeAccess.controls.update();
    
    threeAccess.renderer.render(threeAccess.scene , threeAccess.camera);
}
