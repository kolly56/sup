class Box
{
    constructor(x,y,w,h)
    {
        var options={
            isststic:false,
            restitution:1,
            density:0.5,
            friction:1
        }

        this.w=w;
        this.h=h
        this.body=Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.body);

    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x, pos.y);
       rotate(angle)
        rectMode(CENTER);

        stroke("white")
        strokeWeight(4);

        fill("skyblue");
        rect(0,0,this.w,this.h);
        pop();

}
}