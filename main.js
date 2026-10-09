import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let charges = []

class Vector {
    constructor(x,y,z) {
        this.x = x
        this.y = y
        this.z = z
    }

    static add(...args) {
        let xsum = 0
        let ysum = 0
        let zsum = 0
        for (let i=0; i < args.length; i++) {
            xsum += args[i].x 
            ysum += args[i].y
            zsum += args[i].z
        }

        return new Vector(xsum, ysum, zsum)
    }

    static subt(vec1, vec2) {
        let xsum = vec1.Vector.x - vec2.Vector.x
        let ysum = vec1.Vector.y - vec2.Vector.y
        let zsum = vec1.Vector.z - vec2.Vector.z


        return new Vector(xsum, ysum, zsum)
    }
}

class Particle {
    constructor(charge, x, y, z) { // charge in microcolumbs
        this.charge = charge
        if (this.charge > 0) { 
            this.material = new THREE.MeshBasicMaterial( { color: "red" } );
        } else { 
            this.material = new THREE.MeshBasicMaterial( { color: "blue" } );
        }
        this.x = x
        this.y = y 
        this.z = z
        this.vector = new Vector(this.x, this.y, this.z)
        this.geometry = new THREE.SphereGeometry(1)
        this.threeuse = new THREE.Mesh(this.geometry, this.material)
        this.threeuse.position.set(this.x, this.y, this.z)
        scene.add(this.threeuse)
        charges.push(this)
    }

    static coloumbs_law(i,j){
        return 1000 * (i.charge * j.charge) / Vector.subt(i.Vector, j.Vector)
    }

    step() {
        let localcharges = charges
        let index = localcharges.indexOf(this.threeuse)
        localcharges.splice(index, 1)
        let vecsum = new Vector(0,0,0)
        for (let i =0; i<localcharges.length; i++) {

        }
    }
}

const particle1 = new Particle(2,-1,0,0)
const particle2 = new Particle(-1,2,0,0)
camera.position.z = 5; 

console.log(charges) 

const vec1 = new Vector(1,1,1)
const vec2 = new Vector(3,1,2)
const vec3 = Vector.add(vec1, vec2)

console.log(vec3)

function animate( time ) {
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
