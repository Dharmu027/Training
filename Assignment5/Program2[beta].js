var n=4;
var string ="";

for (let i = -n+1; i <= n; i++) {

    if (i==0) {
        continue;

    }
    for (let j = -n+1; j<n; j++) {

        if (j==0) {
            continue;
            
        }

        if (Math.abs(i) + Math.abs(j) <=4 ) 
        {
            string+="@"
    }else{
        string+="-"
    }
            
        }

        string+="\n";
    
}


console.log(string);