import React, {useRef, useEffect} from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function ThreeTest() {
    const canvasRef= useRef(null);
    console.log(canvasRef)
    useEffect(() =>{
        const scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xDBCAEA );
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
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
        } );
        camera.position.z = 5;
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