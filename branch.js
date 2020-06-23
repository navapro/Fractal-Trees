
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
    
}

