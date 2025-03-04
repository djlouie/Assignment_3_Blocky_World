class Cylinder{
    constructor(){
        this.type = 'cylinder';
        this.color = [1.0, 1.0, 1.0, 1.0];
        this.matrix = new Matrix4();
        this.segments = 10;
    }

    // generateVertices() {
    //     // Calculate and draw the triangles that make up the circle
    //     let angleStep = 360/this.segments;
    //     var d = 1;
    //     let v = []
    //     for (var angle = 0; angle < 360; angle = angle + angleStep) {
    //         let centerPt = [0, 0];
    //         let angle1 = angle;
    //         let angle2 = angle + angleStep;
    //         let vec1 = [Math.cos(angle1*Math.PI/180)*d, Math.sin(angle1*Math.PI/180)*d];
    //         let vec2 = [Math.cos(angle2*Math.PI/180)*d, Math.sin(angle2*Math.PI/180)*d];
    //         let pt1 = [centerPt[0]+vec1[0], centerPt[1]+vec1[1]];
    //         let pt2 = [centerPt[0]+vec2[0], centerPt[1]+vec2[1]];

    //         // Pass the color of a point to u_FragColor variable
    //         // gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    //         // sides
    //         // drawTriangle3D(pt1[0],0,pt1[1],  pt2[0],0,pt2[1],  pt1[0],1,pt1[1]);
    //         // drawTriangle3D(pt2[0],1,pt2[1],  pt1[0],1,pt1[1],  pt2[0],0,pt2[1]);

    //         // gl.uniform4f(u_FragColor, rgba[0]*.9, rgba[1]*.9, rgba[2]*.9, rgba[3]);

    //         // top face
    //         // drawTriangle3D(0,1,0, pt1[0],1,pt1[1], pt2[0],1,pt2[1]);

    //         // bottom face
    //         // drawTriangle3D(0,0,0, pt1[0],0,pt1[1], pt2[0],0,pt2[1]);

    //     }
    // }   

    render(){
        // var xy = this.position;
        var rgba = this.color;
        // var size = this.size;

        // Pass the color of a point to u_FragColor variable
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        
        // Pass the matrix to u_ModelMatrix attribute
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);


        // Calculate and draw the triangles that make up the circle
        let angleStep = 360/this.segments;
        var d = 1;
        let v = []
        for (var angle = 0; angle < 360; angle = angle + angleStep) {
            let centerPt = [0, 0];
            let angle1 = angle;
            let angle2 = angle + angleStep;
            let vec1 = [Math.cos(angle1*Math.PI/180)*d, Math.sin(angle1*Math.PI/180)*d];
            let vec2 = [Math.cos(angle2*Math.PI/180)*d, Math.sin(angle2*Math.PI/180)*d];
            let pt1 = [centerPt[0]+vec1[0], centerPt[1]+vec1[1]];
            let pt2 = [centerPt[0]+vec2[0], centerPt[1]+vec2[1]];

            drawTriangle( [0, 0, pt1[0], pt1[1], pt2[0], pt2[1]]);

            // Pass the color of a point to u_FragColor variable
            // gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

            // sides
            // drawTriangle3D(pt1[0],0,pt1[1],  pt2[0],0,pt2[1],  pt1[0],1,pt1[1]);
            // drawTriangle3D(pt2[0],1,pt2[1],  pt1[0],1,pt1[1],  pt2[0],0,pt2[1]);

            // gl.uniform4f(u_FragColor, rgba[0]*.9, rgba[1]*.9, rgba[2]*.9, rgba[3]);

            // top face
            // drawTriangle3D(0,1,0, pt1[0],1,pt1[1], pt2[0],1,pt2[1]);

            // bottom face
            // drawTriangle3D(0,0,0, pt1[0],0,pt1[1], pt2[0],0,pt2[1]);

        }


        // // Create a buffer object (only if it isn't made already)
        // if (this.buffer === null) {
        //     this.buffer = gl.createBuffer();
        //     if (!this.buffer) {
        //     console.log("Failed to create the buffer object");
        //     return -1;
        //     }
        // }
    
        // // Bind the buffer object to target
        // gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    
        // // Write date into the buffer object
        // gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);

        // // Assign the buffer object to a_Position variable
        // gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);

        // // Enable the assignment to a_Position variable
        // gl.enableVertexAttribArray(a_Position);
    
        // gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length / 3);
    }

    // render(){
    //     var xy = [0,0];
    //     var rgba = this.color;
    //     var size = 200;

    //     // Pass the color of a point to u_FragColor variable
    //     gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        
        
    //     // Draw
    //     var d = size/200.0;  // delta
        
    //     // Calculate and draw the triangles that make up the circle
    //     let angleStep = 360/this.segments;
    //     for (var angle = 0; angle < 360; angle = angle + angleStep) {
    //         let centerPt = [xy[0], xy[1]];
    //         let angle1 = angle;
    //         let angle2 = angle + angleStep;
    //         let vec1 = [Math.cos(angle1*Math.PI/180)*d, Math.sin(angle1*Math.PI/180)*d];
    //         let vec2 = [Math.cos(angle2*Math.PI/180)*d, Math.sin(angle2*Math.PI/180)*d];
    //         let pt1 = [centerPt[0]+vec1[0], centerPt[1]+vec1[1]];
    //         let pt2 = [centerPt[0]+vec2[0], centerPt[1]+vec2[1]];

    //         drawTriangle( [xy[0], xy[1], pt1[0], pt1[1], pt2[0], pt2[1]]);
    //     }
    // }
}