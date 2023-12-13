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
// console.log(MyResult);

function UserName(UserName){
    if(!UserName){
        console.log("please return your name");
        return
    }
    return `${UserName} is logedIn`
}
// console.log(UserName("Vimal Joshi"));
function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(300,5,55,666));

const AboutMe={
    UserName:"Vimal Joshi",
    Course:"Bca"
}
function HandleObject(Anyabject) {
    console.log(`Username is ${Anyabject.UserName} and price is ${Anyabject.Course}`);
}
HandleObject(AboutMe)
const Array = [22,34,45,70]
function Myarray(YourArray){
    console.log(`My array is ${YourArray[0]}`);
}
Myarray(Array)
