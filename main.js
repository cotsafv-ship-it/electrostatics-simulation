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

    add(...args) {
        let xsum, ysum, zsum
        xsum = ysum = zsum = 0
        for (i=0;i < args.length; i++) {
            args[i].x += xsum
            args[i].y += ysum
            args[i].z += zsum
        }

        return new Vector(xsum, ysum, zsum)
    }
}

class Particle {
    static en = 9 * (10**9)
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
        this.geometry = new THREE.SphereGeometry(1)
        this.threeuse = new THREE.Mesh(this.geometry, this.material)
        this.threeuse.position.set(this.x, this.y, this.z)
        scene.add(this.threeuse)
        charges.push(this)
    }

    coloumbs_law(i,j){
        return (1/(4*Math.PI * en)) * ((i.charge * j.charge)/(((((i.x - j.x)**2 + (i.y-j.y)**2 + (i.z-j.z)**2 ))))) //r^2 and sqrt for distance cancels out
        // please refactor with the vector class
    }

    step() {
        let localcharges = charges
        let index = localcharges.indexOf(this.threeuse)
        localcharges.splice(index, 1)
        for (let i =0; i<localcharges.length; i++) {

        }
    }
}

const particle1 = new Particle(2,-1,0,0)
const particle2 = new Particle(-1,2,0,0)
camera.position.z = 5; 

console.log(charges) 



function animate( time ) {
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
