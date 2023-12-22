//for Of
const Arry = [1,2,3,4,5];
for (const num of Arry) {
    // console.log(num);
}
const Sawhello = "hello World!"
for (const hello of Sawhello) {
    // console.log(`Each char is ${hello}`);
}

const map = new Map();
map.set("name","vimal");
map.set("Course","Bca");
map.set("School","Campus School Panthnager");
for (const [MapValue,Value] of map) {
    // console.log(MapValue,Value);
}
const Myobj = {
    Name:"Vimal Joshi",
    couse:"Bca"
}
// for (const Obj of Myobj) {
//     console.log(Obj);
// }