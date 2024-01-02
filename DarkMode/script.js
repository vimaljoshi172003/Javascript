//Dark Mode
const darkMode = document.querySelector('.darkMode').addEventListener('click',()=>{
    ChangeMode('#020202','#ffff','red')
})

const Body = document.querySelector('body')
const span =document.querySelectorAll('span')
const ChangeMode = (backgroundColor,color,color2)=>{
    Body.style.backgroundColor = backgroundColor
    Body.style.color = color
    span.forEach((span)=>{
        span.style.color = color2;
    })
}
//Light Mode
const LightMode = document.querySelector('.NormalMode').addEventListener('click',()=>{
    ChangeMode('#fff','#000','grey')
})