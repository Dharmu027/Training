var n = 5;
var string = "";

for (let i = -n - 1; i <= n + 1; i++) {

    for (let j = -n - 1; j <= n + 1; j++) {

       

        if (Math.abs(i) == 6 || Math.abs(j) == 6) {
            string += "0";

        }
        else if (Math.abs(i) - Math.abs(j) >= 0) {

            if (j > 0 && i < 0 || i > 0 && j < 0) {
                string+=(Math.abs(i)-Math.abs(j)+1);
            }else{
                string+=String.fromCharCode(97 +Math.abs(i)-Math.abs(j))
            }

        }

        else {
            string += " ";
        }





    }
    string += "\n";
}
console.log(string);