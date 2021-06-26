class Stone{
	constructor(x,y,r){
	  var options = {
		  'restitution' : 0.8,
		  'friction' : 0.9,
		  'density' : 12
	  }
	  this.r=r

	  this.x=x;
	  this.y=y;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r)
			pop()
	}

}
    
