

	var a= 3;
var b=2;
var c= 1;
	if(a<b && a<c){
		
		if(b<c){
			
			console.log(a,b,c);
			
		}
			
			else{
				console.log(a,c,b);
		}
	}
	
	else if(b<a && b<c){
		
		if(a<c){
			
			console.log(b,c,a);
			
		}
			
			else{
				console.log(a,c,b);
			}
	}
	
	else if(c<a && c<b){
		
		if(a<b){
			
			console.log(c,a,b);
			
		}
			
			else{
				console.log(a,c,b);
			}
	 }