const FetchBtn = document.getElementById('FetchBtn');
FetchBtn.addEventListener('click',FatchData)
function FatchData(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users/vimaljoshi172003',true);
    xhr.onload = function(){
        const mydata = JSON.parse(this.responseText) 
        console.log(mydata.id);
    }
    xhr.send()
}