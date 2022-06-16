import React, {useRef, useEffect} from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function ThreeTest() {
    const canvasRef= useRef(null);
    console.log(canvasRef)
    useEffect(() =>{
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color( 0xDBCAEA );
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setSize( window.innerWidth, window.innerHeight );
        canvasRef.current.appendChild( renderer.domElement );
        const loader = new GLTFLoader();
        loader.load( './models/bananana.gltf', gltf => {
            const gltfscene=gltf.scene;
            const object=gltfscene.children[0];
            const geometry=object.children[0].children[0]
            // console.log(geometry.material);
            const material = new THREE.MeshPhongMaterial( { color: 0xf0e050, shininess: .6 } );
            geometry.material=material;
            scene.add(object)
            const animate = function () {
                requestAnimationFrame( animate );
                object.rotation.z += 0.001;
                object.rotation.y += 0.01;
                renderer.render( scene, camera );
            };
            animate();
        } );
        const light1 = new THREE.PointLight( 0xffe0e0, .55, 100 );
        light1.position.x = 12; light1.position.y=4; light1.position.z=12
        const light2 = new THREE.PointLight( 0xe0e0ff, .55, 100 );
        light2.position.x = 0; light2.position.y=8; light2.position.z=0
        const light3 = new THREE.PointLight( 0xfffff0, .55, 100 );
        light3.position.x = -12; light3.position.y=4; light3.position.z=12
        const light4 = new THREE.AmbientLight(0xDECDEB, 0.6);
        scene.add(light1); 
        scene.add(light2);
        scene.add(light3);
        scene.add(light4);
        camera.position.z = 25;
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