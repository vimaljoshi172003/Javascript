const tem = 40
// if(tem<50){
//     console.log("tem is less than 50");
// }
// else{
//     console.log("tem is greater than the 50");
// }


const score = 100;
// if (score >1000){
//     let power = 'fly' 
//     console.log(`user can ${power}`);
// }
// console.log(`user can ${power}`);
// const balance = 1000;
// if (balance<500) {
//     console.log('Balace is less tha 500');
// }else if(balance<750){
//     console.log('Balace is less tha 750');
// }else if(balance<=1000){
//     console.log('Balace is less tha or equal to 1000');
// }
const isUserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromGmail = true
if (isUserLoggedIn && debitCard) {
    console.log("Allow to Buy suscribsion");
}
if (LoggedInFromGoogle || LoggedInFromGmail) {
    console.log("User loggedIn");
}
