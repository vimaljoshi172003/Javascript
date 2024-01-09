const body = document.querySelector('body');
const Paragraph = document.getElementById('Paragraph');
let randomColor;
const Start = document.getElementById('Start').addEventListener('click',()=>{
    if(!randomColor){
        randomColor = setInterval(()=>{
            const MyrandomColor = Math.floor(Math.random()*16777215).toString(16);
            body.style.backgroundColor = "#"+MyrandomColor
            Paragraph.innerText = "#"+MyrandomColor
        },1000)
    }
})
const stop = document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(randomColor);
    randomColor = null
})