const marvel_heros =["Thor","IronMan","spiderMan"];
const Dc_heros = ["superMan","flash","batman"];
// marvel_heros.push(Dc_heros);
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// var allHeros = marvel_heros.concat(Dc_heros)
// console.log(allHeros);

// spread method in Array
const all_new_heros =[...marvel_heros,...Dc_heros]
// console.log(all_new_heros);

const MyArray = [1,2,3,[4,5,6],7,8,9,[4,5,2,[6,8,0]]]
const MysimpleArray = MyArray.flat(Infinity)
// console.log(MysimpleArray);
// console.log(Array.isArray("Vimal"));
// console.log(Array.from("Vimal"));
// console.log(Array.from({name:"Vimal"}));
let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1,score2,score3));

// ##############################################################################

const MyNewArray = [2,4,5]
const NewArrayObj=[1,2,3]
console.log(...MyNewArray,...NewArrayObj);
console.log(Array.isArray(MyNewArray));
console.log(Array.isArray([]));
console.log(Array.isArray("[]"));
console.log(Array.isArray([{}]));
console.log(Array.isArray(new Array(1,2,3,4)));
const Myname ="Vimaljoshi"
console.log(Array.from("[]"));
const YourName = Myname;
console.log(Array.from(YourName));
console.log(Myname);

let MyName ="vimal"
let FriendName = "Raj"
let Friend2Name = "Arsh"
console.log(Array.of(MyName,FriendName,Friend2Name));

