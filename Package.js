class Package{
    constructor(x, y, width, height){
        var options ={
        restitution: 0.5
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
    }
    display(){
        var angle = this.Bodies.angle;
        push();
        translate(this.body.position.x, this.body.position,y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this,height);
        pop();
    }
}