class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
			this.body=Bodies.rectangle(x, y, w, h , options);
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
		
			rectMode(CENTER)
			fill(128,128,128)
			rect(groundPos.x,groundPos.y,this.w,this.h);
			
			
	}

}