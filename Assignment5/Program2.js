var one=5;
var num="" ;

    

for (let i = 0; i < one; i++) {
    for (let j = 0; j<one; j++) {
       if (i+j<one-1) {

        num+=" ";
           
       }
       else{
           num+="@"
       }
       
    }

    num += "\n";
    }

    
    for (let i = 0; i < one; i++) {
        for (let e = 0; e < one; e++) {
           num+=" ";
            
        }
        for (let j = 0; j < one-i; j++) {
    
            num += "@";
    
    
        }
    
        num += "\n" ;
    
    }
   






console.log(num);