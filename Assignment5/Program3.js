var n = 6;
var string = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i==2 && j==2) {
            string+="o";
            
        }
        else if (i==2 && j==3) {
            string += "o";

        }
        else if (i==3 && j==2) {
            string += "o";

        }
        else if (i==3 && j==3) {
            string += "o";

        }
      
        else if (i == j) {
            string += "\\";

        }
        else if (i + j == n-1) {

            string += "/"

        }
        else if (j == 0 || j == 5) {

            string += "|"

        }
        else if (i == 0 || i == 5) {

            string += "-"

        }

        else {
            string += " ";
        }

        
    }



    string += "\n";
}

console.log(string);
