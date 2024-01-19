const MyButton = document.getElementById('Btn')
MyButton.addEventListener('click',function(){
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("async task is compelete");
            resolve();
        },1000)
    })
    // console.log(typeof promise);
    promise.then(function(){
        console.log("then Consumed");
    })
})
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })
const promis2 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({Username:"vimal",gmail:"vimaljoshi939@gmaal.com"})
    },1000)
})
promis2.then(function(user){
    // console.log(user.gmail);
})
const promis3 = new Promise((resolve, reject) => {
    setTimeout(function(){
        const error = false;
        if (!error) {
            resolve({UserName:"raj",email:"NaughtyRajkundra@gmail.com"})
        }
        else{
            reject("Some error is accoured")
        }
    },1000)
})
promis3.then(function(user){
    console.log(user);
    return user.email;
}).then(function(email){
    console.log(email);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
})


const promis4 = new Promise((resolve, reject) => {
    setTimeout(function(){
        const error = true
        if (!error) {
            resolve({username:"Javascript",password:"1234"})
        }
        else{
            reject('Some Error is accoured')
        }
    },1000)

})
async function cosumepromsefour(){
    try {
        const response = await promis4
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
cosumepromsefour()
