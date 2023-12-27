const ParentClass = document.querySelector('.parent')
console.log(ParentClass);
console.log(ParentClass.children[0]);
console.log(ParentClass.children[0].innerHTML);
for (let i = 0; i < ParentClass.children.length; i++){
    const parentElement = ParentClass.children[i]; 
    parentElement.style.color = "orange"
    parentElement.style.fontWeight = "bolder"  
}
console.log(ParentClass.firstElementChild);
console.log(ParentClass.lastElementChild);

const ChildClass = document.querySelector('.day')
const MyParent = ChildClass.parentElement
console.log(MyParent);
console.log("next",ChildClass.nextElementSibling);

console.log("Parent",ParentClass.childNodes);


// Element Node list 
const Myelement = document.createElement('div');
// Myelement.className ="main"
// Myelement.id = "Myid"
Myelement.setAttribute(
    "id","myid"
)
Myelement.innerText = "Friday";
document.body.appendChild(Myelement);
Myelement.style.color = "orange";
Myelement.style.fontWeight = "bolder";

// console.log(Myelement);