class Camera {
    constructor(){
        this.eye = new Vector3({0: 0, 1: 0, 2: 3});
        this.at = new Vector3({0: 0, 1: 0, 2: -100});
        this.up = new Vector3({0: 0, 1: 1, 2: 0});
        this.fov = 60;

        // this.eye = new Vector3([0, 0, 3]);
        // this.at = new Vector3([0, 0, -100]);
        // this.up = new Vector3([0, 1, 0]);
    }

    // calculate vector from eye to at (d = direction)
    forward(scalar=1) {
        var d = Vector3.sub(this.at, this.eye);
        d.normalize().mul(scalar);
        this.at.add(d);
        this.eye.add(d);
    }

    // calculate vector from at to eye
    backward(scalar=1) {
        var d = Vector3.sub(this.eye, this.at);
        d.normalize().mul(scalar);
        this.at.add(d);
        this.eye.add(d);
    }

    // calculate vector orthogonal 
    // to plane made from vector from at to eye and up
    // to get the left direction
    left(scalar=1) {
        var f = Vector3.sub(this.at, this.eye);
        f.normalize();
        var s = Vector3.cross(f, this.up);
        s.normalize().mul(-1).mul(scalar);;
        this.at.add(s);
        this.eye.add(s);
    }

    // calculate vector orthogonal
    // to plane made from neg vector from at to eye and up
    // to get the left direction
    right(scalar=1) {
        var f = Vector3.sub(this.at, this.eye);
        f.normalize();
        var s = Vector3.cross(f, this.up);
        s.normalize().mul(scalar);;
        this.at.add(s);
        this.eye.add(s);
    }

    rotateRight(degrees=1){
        let d = Vector3.sub(this.at, this.eye);
        // get rid of y component of the vector (cause we are rotating around it)
        d.elements[1] = 0;
        
        let r = d.magnitude();
        let theta = Math.atan2(d.elements[0], d.elements[2]);
        let radiansRotated = -degrees * (Math.PI/180);  // Added negative sign
        theta = theta + radiansRotated;
        
        d.elements[0] = r * Math.sin(theta);
        d.elements[2] = r * Math.cos(theta);
        
        this.at = Vector3.add(this.eye, d);
    }

    rotateLeft(degrees=5) {
        console.log("this.at.elements before", this.at.elements)
        let d = Vector3.sub(this.at, this.eye);
        // get rid of y component of the vector (cause we are rotating around it)
        d.elements[1] = 0;
        
        let r = d.magnitude();
        let theta = Math.atan2(d.elements[2], d.elements[0]);
        let radiansRotated = -degrees * (Math.PI/180);  // Added negative sign
        theta = theta + radiansRotated;
        
        d.elements[2] = r * Math.sin(theta);
        d.elements[0] = r * Math.cos(theta);
        
        let dog = Vector3.add(this.eye, d);
        console.log("this.dog.elements after", dog.elements)
        this.at = dog
        console.log("this.at.elements after", this.at.elements)
    }
}

