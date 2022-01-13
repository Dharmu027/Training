var n=5;
var string ="";

for (let i = 0; i < n; i++) {
    for (let j = 0; j<n; j++) {
       if (i==j || i+j==4 ) {

        string+="#";
           
       }
       else{
           string+="*";
       }
       
    }

    string += "\n";
    }

console.log(string);
