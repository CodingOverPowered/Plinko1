class Division{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
    this.body=Bodies.rectangle(x,y,width,height,option)    
    this.height=height
    this.width=width
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
       
        fill("white")
        rect(pos.x,pos.y,this.width,this.height) 
    }
}