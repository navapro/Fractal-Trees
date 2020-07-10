
class Branch {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.done = false;
    }

    show(){
        stroke (255);
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
    branchRight(){
        let dir = p5.Vector.sub(this.end,this.start);
        dir.rotate(PI/4);
        dir.mult(0.7);
        let newEnd = p5.Vector.add(this.end,dir);

        let right = new Branch (this.end, newEnd);
        return right;
    }
    branchLeft(){
        let dir = p5.Vector.sub(this.end,this.start);
        dir.rotate(-PI/4);
        dir.mult(0.7);
        let newEnd = p5.Vector.add(this.end,dir);

        let left = new Branch (this.end, newEnd);
        return left;
    }
}

