import React, {useRef, useEffect} from "react";
import * as THREE from 'three';
// import threejs from "./three"

function ThreeTest() {
    const canvasRef= useRef(null)
    useEffect(() =>{
        // const canvas = canvasRef.current
        // const context = canvas.getContext('2d')
        // context.fillStyle = '#000000';
        // context.fillRect(0,0, context.canvas.width, context.canvas.height)

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        canvasRef.current.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
        };
        animate();
        return()=> canvasRef.current.removeChild( renderer.domElement)
    },[])
    return(
        <div>
            <h1>ThreeJS section</h1>
            <div ref={canvasRef}></div>
        </div>
    )
}
export default ThreeTest;

// import React, {useRef} from "react";
// import * as THREE from 'three';

// function ThreeTest() {
//     React.useEffect(() => {
        // var scene = new THREE.Scene();
        // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        // var renderer = new THREE.WebGLRenderer();
        // renderer.setSize( window.innerWidth, window.innerHeight );
        // document.body.appendChild( renderer.domElement );
        // // mount=this.mount.appendChild( renderer.domElement );
        // // const ref = useRef(null);
        // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // var cube = new THREE.Mesh( geometry, material );
        // scene.add( cube );
        // camera.position.z = 5;
        // var animate = function () {
        //     requestAnimationFrame( animate );
        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;
        //     renderer.render( scene, camera );
        // };
        // animate();
//       }, []);
//     return(
//         <>
//             <h1>ThreeTest</h1>
//             {/* <div ref={ref => (mount = ref)} /> */}
//         </>
//     )
// }
// export default ThreeTest;

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import * as THREE from "three";
// class ThreeTest extends Component {
//   componentDidMount() {
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//     var renderer = new THREE.WebGLRenderer();
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     // document.body.appendChild( renderer.domElement );
//     // use ref as a mount point of the Three.js scene instead of the document.body
//     console.log("mounting threejs")
//     this.mount.appendChild( renderer.domElement );
//     var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//     var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//     var cube = new THREE.Mesh( geometry, material );
//     scene.add( cube );
//     camera.position.z = 5;
//     var animate = function () {
//       requestAnimationFrame( animate );
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       renderer.render( scene, camera );
//     };
//     animate();
//   }
//   render() {
//     return (
//         <>
//             <div ref={ref => (this.mount = ref)} />
//         </>
//     )
//   }
// }
// export default ThreeTest;