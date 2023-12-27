const Paragraph = document.querySelector('p')
Paragraph.innerText = "hello How are you";
const Mystyle = ()=>{
    return (
        Paragraph.style.color = "yellow",
        Paragraph.style.fontWeight = "bolder"

    )
}
Mystyle()
const AllParagraph = document.querySelectorAll('p')
AllParagraph.forEach((p)=>{
    p.style.color = "yellow"
    p.style.fontWeight = "bolder"
})
const Heading = document.querySelectorAll('h1')
console.log(Heading);
Heading[0].style.color = "red"