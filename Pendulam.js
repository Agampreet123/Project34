class Pendulam{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:1,
            frictionAir:0.005,
            friction:1,
            density:1
        }
        this.radius = radius;
        this.x = x
        this.y = y
        this.body = Bodies.circle(this.x,this.y,(this.radius/2),options);
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        stroke("white");
        fill("black");
        ellipse(0,0,this.radius,this.radius);
        pop()
    }

    
}