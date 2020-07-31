class Particle{
    constructor(x,y,d){
        var options ={
            
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,d,options);
        this.d = d;
        World.add(world,this.body);

        this.color = color(random(0,255),random(0,255),random(0,255));

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.d,this.d);
        pop();
    }
}