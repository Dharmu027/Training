var n = 3;
var string = "";

for (let i = 0; i <= 10; i++) {

    for (let j =-n; j <= n; j++) {

       
        if (i==0 && j==0 ) {
            string+="0";
           
        }
         
        
        else if (i+j==0 || ((j<0) && Math.abs(i)-Math.abs(j)==n)) {
            string += "/";

        }
        
        else if (i==j || ((j>0) && Math.abs(i)-Math.abs(j)==n) ) {
            string += "\\";

        }
        else if (i>6 && Math.abs(j)==1 && i < n*n +1  )  {
            string += "|";

        }
        
        else if (i>6 && j==0 || i == n * n + 1) {
            string += "=";

        }
        
        
        
        
        
        else{
            string+=" "
        }
        
       



       

    
    
}
string += "\n";
}
console.log(string);