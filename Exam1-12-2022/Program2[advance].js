var n = 5;
var str = "";

for(i=(-n-1);i<=n+1;i++)
{
    for(j=(-n-1);j<=n+1;j++)
    {
       if(Math.abs(j)==n+1)
       {
           str+="|";
       }
       else if (Math.abs(i)==n+1) {
        str+="=";
       }
       else if (i==0 && j==0) {
        str+="X";
       }

       else if (Math.abs(i)-Math.abs(j)<=0 && ((i>0 && j<0) || (i<0 && j>0))) {
        str+="*";
       }

       else if (Math.abs(i)-Math.abs(j)>=0 ) {
        str+="*";
       }

    //    else if(Math.abs(i)-Math.abs(j)<=0  && i<0 && j>0){
    //        str+="*";
           
    //    }
       else
       {
           str+=" "
       }
    }
    str+="\n";
}
console.log(str);
// for (let i = -(n+1); i <= n+1; i++) {

//     for (let j = -(n+1); j <= n+1; j++) {

//         if (Math.abs(j) == n+1 ) {
//              string += "|";

//          }
//          else if (i==0 && j==0) {
//             string += "X"

//         }

//         // if (i == -n && j > -n || i == n && j < n || i == n && j == -n + 1) {
//         //     string += "0";

//         // }
//         else if (Math.abs(i) == n+1) {
//             string += "="

//         }
//         else if((i>0 && j<0 )&& (Math.abs(i)-Math.abs(j)<=0))
//         {
//             string+=n-(Math.abs(j)+1);
//         }
//         // else if(Math.sign(i)==Math.sign(j) && Math.abs(i)-Math.abs(j)>=0)
//         // {
//         //     string+=Math.abs(j)
//         // }

//         // else if(Math.sign(i)!=Math.sign(j) && Math.abs(i)-Math.abs(j)<=0 && i!=0)
//         // {
//         //     string+=n-Math.abs(j)+1
//         // }


//         // else if (i == 0 && j == 0) {
//         //     string += "o"

//         // }

//         // else if (Math.abs(i) - Math.abs(j) >= 0) {

//         //     if (j > 0 && i < 0 || i > 0 && j < 0) {
//         //         string+=n-Math.abs(j)+1;
//         //     }else{
//         //         string+=Math.abs(j);
//         //     }
//             // if (j > 0 && i < 0 || i > 0 && j < 0) {
//             //     string+=n-Math.abs(j)+1;
//             // }else{
//             //     string+=Math.abs(j);
//             // }
//         // }
//         else{
//             string+="-"
//         }
        



//         // else if(i==j) {
//         //     string+="O"

//         // }

        
//     }string += "\n";
// }
// console.log(string);