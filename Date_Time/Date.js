let Mydate = new Date();
// console.log(Mydate)
// console.log(Mydate.toString());
// console.log(Mydate.toDateString());
// console.log(Mydate.toLocaleString());
// let MyOwndate = new Date(2023,8,17);
// let MyOwndate = new Date(2023,8,17,21,59);
let MyOwndate = new Date("2023-01-14");
// console.log(MyOwndate.toLocaleString());
let MyTime = Date.now()
console.log(Math.floor((MyTime)*0.0001))
let NewDate = new Date()
console.log(NewDate.getMonth()+1);
let myCustomDate = NewDate.toLocaleString('default',{
    weekday:"long";
})
console.log(myCustomDate);
