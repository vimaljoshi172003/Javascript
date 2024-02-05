function setUsername(Username){
    this.Username = Username;
    console.log("called");
}
function createUser(Username,email,password){
    setUsername.call(this,Username);
    this.email = email;
    this.password = password;
}
const newuser = new createUser("Vimal","v@gmail.com","123");
console.log(newuser);