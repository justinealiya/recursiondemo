function sq(t,len){
	for(let j=0;j<4;j++){
		t.fd(len);t.rt(90);
	}
}

function v(len,t,lev){
	if(lev==0){let x=t.xpos();let y=t.ypos();
	let a=t.dir();chaos(t,10);t.set1(x,y,a);}
	
	else{t.rt(30);t.fd(len);v(2*len/3,t,lev-1);t.bk(len);
	t.lt(60);t.fd(len);v(2*len/3,t,lev-1);t.bk(len);t.rt(30);
	}
}

function v1(len,t){
	if(len<15){chaos(t,5);}
	else{t.rt(30);t.fd(len);v(2*len/3,t);t.bk(len);
	t.lt(60);t.fd(len);v(2*len/3,t);t.bk(len);t.rt(30);
	}
}


function sqs(t,j,len){
	if(j==0){}
	else{
		sqs(t,j-1,len);
		t.bk(len*(j-1));t.lt(90);t.bk(len);t.rt(90);
	for(let k=0;k<j;k++){
		sq(t,len);t.fd(len);
	}
	}
}
	
function chaos(t,n){
	if(n<2){}
	else{
	t.fd(10);t.rt(Math.random()*180);	
	chaos(t,n-1);
	}
}

function cir(t,len){
	
}	

function setLevel(){
  lev=	document.getElementById("text1").value;

}





