class SlingShot{
    constructor(A, B){
        var options = {
            bodyA: A,
            pointB: B,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA){
            var ptA = this.chain.bodyA.position;
            var ptB = this.chain.pointB;
            strokeWeight(4);
            line(ptA.x, ptA.y, ptB.x, ptB.y);
        }  
    }
    fly(){
        this.chain.bodyA = null;
    }
    
}