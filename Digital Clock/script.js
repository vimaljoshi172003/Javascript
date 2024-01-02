const Body = document.querySelector('body');
const Modes = (backgroundColor,color)=>{
    Body.style.backgroundColor = backgroundColor;
    Body.style.color = color
}

const Light = document.querySelector('.Light').addEventListener('click',()=>{
    Modes('#fff','#000')
})
const Dark = document.querySelector('.dark').addEventListener('click',()=>{
    Modes('#000','#ffff')
})
const clock = document.getElementById('clock')
setInterval(()=>{
    let date = new Date()
    let MyDate = date.toLocaleTimeString()
    clock.innerText = MyDate
},1000)
// console.log();


