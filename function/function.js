function SayMyName(){
    console.log("v");
    console.log("i");
    console.log("m");
    console.log("a");
    console.log("l");
}
// SayMyName()
// function Math(Num1,Num2){
//     console.log(Num1+Num2);
// }
// SayMyName()
function Math(Num1,Num2){
    return Num1+Num2
}
let MyResult = Math(2,4)
console.log(MyResult);

function UserName(UserName){
    if(!UserName){
        console.log("please return your name");
        return
    }
    return `${UserName} is logedIn`
}
console.log(UserName("Vimal Joshi"));