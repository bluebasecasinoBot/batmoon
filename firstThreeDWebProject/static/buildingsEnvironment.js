import {getThreeAccess} from "./threeDRenderScript.js";
import * as THREE from "./three.module.min.js"
import {GLTFLoader} from "./GLTFLoader.js"

export const buildings = () =>{
    building_init("set1/large_buildingC.glb" , [10,10,10] , [5, -5 ,-50]);
    building_init("set1/large_buildingD.glb" , [10,10,10] , [20, -5 ,-10]);
    building_init("set1/large_buildingG.glb" , [10,10,10] , [-15, -5 ,-50]);
    building_init("set1/skyscraperD.glb" , [10,10,10] , [35, -5 ,-50]);
    building_init("set1/skyscraperC.glb" , [10,10,10] , [5, -5 ,-80]);
    building_init("set1/skyscraperE.glb" , [10,10,10] , [40, -5 ,-80]);
    building_init("set1/skyscraperB.glb" , [10,10,10] , [-20, -5 ,-70]);

    building_init("set1/large_buildingA.glb" , [10,10,10] , [5, -5 ,20]);
    building_init("set1/large_buildingC.glb" , [10,10,10] , [55, -5 ,10]);
    building_init("set1/large_buildingD.glb" , [10,10,10] , [50, -5 , 0]);
    building_init("set1/large_buildingG.glb" , [10,10,10] , [5, -5 ,50]);
    building_init("set1/skyscraperD.glb" , [10,10,10] , [75, -5 ,50]);
    building_init("set1/skyscraperC.glb" , [10,10,10] , [65, -5 ,60]);
    building_init("set1/skyscraperE.glb" , [10,10,10] , [80, -5 ,60]);
    building_init("set1/skyscraperA.glb" , [10,10,10] , [80, -5 ,40]);
    building_init("set1/skyscraperB.glb" , [10,10,10] , [80, -5 ,20]);
    building_init("set1/skyscraperE.glb" , [10,10,10] , [80, -5 ,0]);
    building_init("set1/skyscraperA.glb" , [10,10,10] , [80, -5 ,-20]);
    building_init("set1/skyscraperB.glb" , [10,10,10] , [80, -5 ,-40]);
    building_init("set1/skyscraperB.glb" , [10,10,10] , [40, -5 ,30]);


}

const building_init = (pathName , scaleArray , positionArray) =>{
    const threeAccess = getThreeAccess();

    //load 3d environment
    const loader = new GLTFLoader();
    loader.load(`./assets/${pathName}`, function(gltf) {
        const model = gltf.scene;
        model.traverse((node) => {
            if (node.isMesh && node.material) {
                node.material.metalness = 0.7;  // Adjust for metallic models
                node.material.roughness = 0.3;  // Adjust roughness
                node.material.emissive = new THREE.Color(0x222222); // Give it some light
                node.material.needsUpdate = true;
            }
        });
        model.scale.set(...scaleArray);
        model.position.set(...positionArray)
        threeAccess.scene.add(model);
    }, undefined, function(error) {
        console.error('Error loading model:', error);
    });
    //load 3d environment

}