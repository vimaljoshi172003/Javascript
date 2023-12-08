// Primitive DataTypes
// 7 types : String,Number,Boolearn,null,undefined,symbol,BigInt

const score = 100;
const scoreValue = 1000.3
// console.log(typeof scoreValue);

const isLoggedIn=false

const outsideTemp = null
// console.log(typeof outsideTemp);

let userEmail;
// console.log(typeof userEmail);

const id = Symbol('123');
const AnotherId = Symbol('123');
// console.log(id === Symbol);

const BigNumber = 38739732877826362343244334342n;


// Reference(Non Primitive)

// Array,Objects,Function
const Heros = ['ironMan','Batman','supperMan']
// console.log(typeof Heros);
let myObj = {
    Name:'vimal',
    course :'Bca'
}
// console.log(typeof myObj);

//number = 'number'
//string = 'string'
// Boolean = 'boolean'
//null= 'object'
// undefined = 'undefined'
// Array = 'object'
// object = 'object'
//function = 'function Object'


// ######################### Memory ###############################
// stack memory,heap memory
// Primitive DataTypes is stack
//Non Primitive is Heap

let MyUserName = "Joshi_ji_17"
let MySecondUserName = MyUserName;
MySecondUserName = 'AllAbout_joshi'
console.log(MyUserName)
console.log(MySecondUserName);

let MyObj = {
    Name:'vimaljoshi',
    course:'Bca'
}
let newObj = MyObj
newObj.course = 'btech'
console.log(newObj.course);
console.log(MyObj.course)