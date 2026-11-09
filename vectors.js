export class Vector2D{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    static dot_product(vec1, vec2) {
        return vec1.x * vec2.x + vec1.y * vec2.y
    }

    static add(...args) {
        let xsum = 0
        let ysum = 0
        for (let i=0; i < args.length; i++) {
            xsum += args[i].x 
            ysum += args[i].y
        }

        return new Vector2D(xsum, ysum)
    }

    static sum_from_list(list) {
        let xsum = 0
        let ysum = 0
        for (let i =0; i < list.length; i++){
            xsum += list[i].x
            ysum += list[i].y
        }

        return new Vector2D(xsum, ysum)
    }

    distance() {
        return Math.sqrt(this.x **2 + this.y**2)
    }

    norm(){
        return new Vector2D(this.x / this.distance(),this.y / this.distance())
    }
}

export class Vector3D{
    constructor(x,y,z){
        this.x = x
        this.y = y
        this.z = z
    }

    static sum_from_list(list) {
        let xsum = 0
        let ysum = 0
        let zsum = 0
        for (let i =0; i < list.length; i++){
            xsum += list[i].x
            ysum += list[i].y
            zsum += list[i].z
        }

        return new Vector3D(xsum, ysum, zsum)
    }

    norm() {
        return new Vector3D(this.x / this.distance(),this.y / this.distance(),this.z / this.distance())
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

        return new Vector3D(xsum, ysum, zsum)
    }

    static dot_product(vec1, vec2) {
        return vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z 
    }

    static cross_product(vec1, vec2) {
        return new Vector3D((vec1.y * vec2.z - vec1.z * vec2.y), -(vec1.x * vec2.z - vec1.z * vec2.x), (vec1.x * vec2.y - vec1.y * vec2.x))
    }

    distance() {
        return Math.sqrt(this.x **2 + this.y**2 + this.z**2)
    }
}