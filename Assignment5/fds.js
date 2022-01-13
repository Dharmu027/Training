var n = 5;
var string = "";

for (let rows = 0; rows < n; rows++) {
    for (let cols = 0; cols < n-rows; cols++) {

        string += "@";


    }

    string += "\n" ;

}
console.log(string);