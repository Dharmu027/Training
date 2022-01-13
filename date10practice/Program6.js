var one = 5;
var num = "";



for (let i = 0; i < one; i++) {
    for (let j = -4; j <one; j++) {

        if (i-Math.abs(j)>=0) {

            num += i-Math.abs(j)+1;
            
        }
        else{
            num+=" ";
        }
        




        
    }

    num += "\n";
}

console.log(num);