// singleton
// Object.create

// Object literals
const Mysym = Symbol("Mykey")

const Jsuser = {
    name:"vimal Joshi",
    [Mysym]:"mykey",
    age:18,
    location : "Haldwani",
    email:"Vimaljoshi939@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser[Mysym]);
Jsuser["email"] = "Vimal18@gmail.com"
Object.freeze(Jsuser)
console.log(Jsuser["email"])