const my_hero = ["Hulk","SpiderMan"];
// console.log(my_hero);
const users = {
    name:"Vimal",
    name2:"Arsh",
    name3:function(){
        console.log("Raj");
    }
}
Object.prototype.newname = function(){
    console.log("vimal is good programer");
} 
// my_hero.newname();

Array.prototype.heyvimal = function(){
    console.log("Vimal says hello");
}
// my_hero.heyvimal()
// users.heyvimal();
const USer = {
    name:"vimal joshi",
    email:"Vimaljoshi939@gmail.com"
}
const teacher = {
    makevideo : true
}
const teachersupport = {
    isavailable:false
}
const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__ : teachersupport 
}
teacher.__proto__ = USer;
// modern syntex
Object.setPrototypeOf(teachersupport,teacher)
