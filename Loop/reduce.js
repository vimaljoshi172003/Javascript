const Myarray = [1,2,3,4,5];
const Total = Myarray.reduce((acc,currval)=>{
    // console.log(`the value of acc is ${acc} and the value of currval is ${currval}`);
    return acc + currval
},0
)
// console.log(Total);


const Shopping = [
    {
        Item:"js Course",
        price:999
    },
    {
        Item:"Py Course",
        price:999
    },
    {
        Item:"c++ Course",
        price:999
    },
    {
        Item:"c# Course",
        price:999
    },
]
const MytotalPrice = Shopping.reduce((acc,rate)=>{
   return acc + rate.price
},0)
console.log(MytotalPrice)