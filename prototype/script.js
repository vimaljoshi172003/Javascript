function myfunction(username,score){
    this.username = username;
    this.score = score
}
myfunction.prototype.newfunction = function(){
    this.score++
}
const newway = new myfunction("Vimal",50);
console.log(newway);

