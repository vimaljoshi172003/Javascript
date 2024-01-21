const Myspan = document.getElementById('span')
const mybtn = document.getElementById('btn')
mybtn.addEventListener("click",()=>{
    async function getallusers(){
        try {
            const response = await fetch("https://api.github.com/users/vimaljoshi172003");
            const data = await response.json();
            Myspan.innerText = data.login
            // console.log(data.login);
        } catch (error) {
            console.log("E",error);
        }
    }
    getallusers()
})

fetch("https://api.github.com/users/vimaljoshi172003")
.then((respone)=>{
    const JSon = respone.json()
   return JSon
})
.then((data)=>{
    console.log(data.login);
})
.catch((error)=>{
    console.log(error);
})

