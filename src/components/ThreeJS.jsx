import React, {useRef, useEffect} from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function ThreeTest() {
    const canvasRef= useRef(null);
    console.log(canvasRef)
    useEffect(() =>{
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        // renderer.setSize( 100, 100 );
        canvasRef.current.appendChild( renderer.domElement );
        const loader = new GLTFLoader();
        loader.load( './models/test.gltf', gltf => {
            const gltfscene=gltf.scene;
            const object=gltfscene.children[0];
            const geometry=object.children[0]
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            geometry.material=material;
            scene.add(object)
            const animate = function () {
                requestAnimationFrame( animate );
                object.rotation.x += 0.01;
                object.rotation.y += 0.01;
                renderer.render( scene, camera );
            };
            animate();

            // console.log(geometry)
            // const test= new THREE.Mesh(geometry, material)
            // scene.add(test);
        } );
        // const loader = new THREE.ObjectLoader();
        // const loader = new GLTFLoader();
        // const loadedData = loader.loadAsync('../models/tile01');
        // loader.load("../../public/models/test", function(model){
        //     console.log(model);
        // })
        // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // const cube = new THREE.Mesh( geometry, material );
        // scene.add( cube );
        camera.position.z = 5;
        // const animate = function () {
        //     requestAnimationFrame( animate );
        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;
        //     renderer.render( scene, camera );
        // };
        // animate();
        console.log(canvasRef.current)
        return()=> canvasRef.current.removeChild( renderer.domElement)
    },[])
    return(
        <div>
            {/* <div ref={canvasRef} className='position-absolute'></div> */}
            <div ref={canvasRef} className="zback"></div>
        </div>
    )
}
export default ThreeTest;