

function start(){
 t=new logo(300,450,-90,"can1");
 t2=new logo(100,50,0,"can1");
 t.c.lineWidth=1;
t.c.strokeStyle="blue";
//sq(t);t.fd(50);t.rt(40);sq(t);

v(100,t,lev);
t.rt(90);
//sqs(t2,8,20);
chaos(t2,50);
}

function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
