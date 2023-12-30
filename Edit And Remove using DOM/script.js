const Myul = document.querySelector('ul')
Myul.style.color = "orange";
Myul.style.fontWeight = "bolder";
const Myelement = (...Language)=>{
    const newli = document.createElement('li')
    newli.innerText = Language
    Myul.appendChild(newli)
 }

Myelement("Python")
const OptimizedWay=(...Language)=>{
   const newli = document.createElement('li');
   newli.appendChild(document.createTextNode(Language));
   Myul.appendChild(newli)
} 
OptimizedWay('C#');
//Edit
const secondLanguage = document.querySelector("li:nth-child(2)")
const newli = document.createElement('li')
newli.textContent = "django"
secondLanguage.replaceWith(newli)

// edit 
const FirstLang = document.querySelector("li:first-child");
FirstLang.outerHTML = "<li>TypeScript</li>"

// remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove()