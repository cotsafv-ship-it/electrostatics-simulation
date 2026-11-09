import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as Vec from "./vectors.js"

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();
const scene = new THREE.Scene()
const light = new THREE.AmbientLight()

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let charges = []

class Particle{
    constructor(x,y,z,charge) {
        this.x = x
        this.y = y
        this.z = z
        this.charge = charge
        this.geometry = new THREE.SphereGeometry(1)
        if (charge > 0) {
            this.material = new THREE.MeshBasicMaterial({ color: "red" })
        } else {
             this.material = new THREE.MeshBasicMaterial({ color: "blue" })
        }
        this.threeuse = new THREE.Mesh(this.geometry, this.material)
        this.threeuse.position.set(this.x, this.y, this.z)
        scene.add(this.threeuse)
        charges.push(this)
    }

    static ep_0 = 100 //to be changed

    render(){
    let localcharges = charges
        let index = localcharges.indexOf(this.threeuse)
        localcharges.splice(index, 1) //now we have a list of every other particle to repeatedly apply the force
        //now use the vector add command by assiging each particle a vector based on its charge
        for(let j=0; j < localcharges.length(); j++) {
            //assign each charge a vector
            localcharges[j]
        }
    }
}

x = new Particle(1,1,1,2)



function animate( time ) {
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );