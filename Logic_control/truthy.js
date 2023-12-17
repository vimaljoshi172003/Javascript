const UserEmail = []
if (UserEmail) {
    console.log("Got User email");
}
else{
    console.log("Don't have userEmail");
}
// falsy value 
// false ,0,-0, BigInt 0n, "",null,undefined,NaN 

// truthy value
// true,[],"0",'false'," ",{},function(){},
if (UserEmail.length === 0) {
    console.log("Array is empty");
}
const Obj = {}
if (Object.keys(Obj).length === 0) {
    console.log("Object is Empty");
}

//  Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 =null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 20 ?? 90
console.log(val1);


// terniary Operator 
// condition ? true : false
const IceTeaPrice = 100;
IceTeaPrice <= 80 ? console.log('less than 80') : console.log("more than 80");