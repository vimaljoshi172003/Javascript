const Language = ["python","Java","js","node","React"];

// Language.forEach((item)=>{
//     console.log(item);
// })

// Language.forEach((element,index,arr) => {
//     console.log(`the index ${index} of value is ${element} and list is ${arr}`);
// });
const Codeing = [
    {
        LanguageName:"Java",
        LanguageFileName: "java"
    },
    {
        LanguageName:"Python",
        LanguageFileName: "py"
    },
    {
        LanguageName:"Javascript",
        LanguageFileName: "js"
    },
]
Codeing.forEach((element)=>{
    console.log(element.LanguageName);
})