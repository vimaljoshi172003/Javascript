    // document.getElementById('owl').onclick = ()=>{
    //     alert('owl')
    // }
    // attachEvent()
    // jQuery - on 
    // type, timestamp, defaultPrevented
    // target , toElement , srcElement, currentTarget
    // clientX, clientY, screenX,screenY
    // altKey,ctrlkey,shiftkey,keyCode

    // document.getElementById('image').addEventListener('click',(e)=>{
    //     console.log('Image is clicked');
    //     e.stopPropagation()
    // },true)
    // document.getElementById('owl').addEventListener('click',(e)=>{
    //     console.log('owl is clicked');

    // },true)
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     console.log('google clicke');
    // },false)
    const Myimg = document.querySelector('#image').addEventListener('click',(e)=>{
        if (e.target.tagName === 'IMG') {
            e.target.parentNode.remove()
        }
    },false)