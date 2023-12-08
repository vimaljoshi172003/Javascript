const MyfirstName = "Vimal";
const MyLastName = "Joshi"
console.log(`Hello Friends My first name is ${MyfirstName} and My last name is ${MyLastName}`);
const gameName = "callofduty"
// console.log(gameName[0]);
// console.log(gameName.__proto__)
// console.log(`the game length is ${gameName.length}`);
// const newGameName= gameName.toUpperCase()
// console.log(`the new game name is ${newGameName}`);
// console.log(`the new game is Now loweCase ${newGameName.toLowerCase()}`);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'))
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const YourName = "   kundra   "
console.log(YourName);
console.log(YourName.trim());

const url = "http://vimaljoshi.com/vimal%20joshi";
console.log(url.replace('%20',"-"));
console.log(url.includes('vimal'));
console.log(url.includes('raj'));
