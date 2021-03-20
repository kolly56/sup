class Rope{
    constructor(body1,offsetX){

        var options={
            bodyA:body1,
            pointB:offsetX,
            stiffness:1.2,
            length:250
        }
        this.offsetX=offsetX;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
}
display()
{
    var pointA=this.rope.bodyA.position;
    var pointB=this.offsetX;
    push();
    strokeWeight(2);
    stroke("white");
   line(pointA.x,pointA.y,pointB.x,pointB.y);
   pop();        

}
}