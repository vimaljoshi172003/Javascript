const myobj = {
    userName:"Vimal Joshi",
    isLogIn:true,
    userData:function(){
        console.log(`username is ${this.userName}`);
    }
}
console.log(this);
console.log(myobj.userData());
const Myobj2 = {
    userData:function(username,course,isLogIn){
        this.username = username
        this.course = course
        this.isLogIn = isLogIn

        return this
    }
}
console.log(Myobj2.userData("Vimal joshi","BCA",true));