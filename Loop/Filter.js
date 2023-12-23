// const Codeing = ["js","ruby","java","python","cpp"];
// const value = Codeing.forEach((Item)=>{
//     return Item
// })
// console.log(value);
const MyNums = [1,2,3,4,5,6,7,8,9,10];
// const myLoop =MyNums.filter((Num)=>{
//     return Num>4
// });
const myLoop =[]
MyNums.forEach((Nums)=>{
    if(Nums>4){
        myLoop.push(Nums)
    }
})
// console.log(myLoop);
const NetflixShow = [
    {
        Type:"Series",
        Name:"13 reasons why",
        img:"https://m.media-amazon.com/images/M/MV5BYmRhZjkyMjEtNjRkMS00MDQ0LTg2NGMtMTQ3ZjE0NjJmMjM2L2ltYWdlXkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_.jpg"
    },
    {
        Type:"Series",
        Name:"Money Heist",
        img:"https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg"

    },
    {
        Type:"Series",
        Name:"Secret game",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGNo9TBj0qeZcb6oiFCUfy6RgAfO6ghM08tf_HFoKDEOCVBObLzc6Nv8oFx8o9fM1e5g&usqp=CAU",
    },
    {
        Type:"Movie",
        Name:"fifty shades of grey",
        img:"https://i.ytimg.com/vi/r2djVwuRqdQ/maxresdefault.jpg"
    },
    {
        Type:"Movie",
        Name:"Amarican Pie",
        img:"https://i.ytimg.com/vi/HodQhCZvm8I/sddefault.jpg"
    },
    {
        Type:"Series",
        Name:"All of Us Are Dead",
        img:"https://upload.wikimedia.org/wikipedia/en/2/24/All_of_Us_Are_Dead.jpeg"
    },
    {
        Type:"Movie",
        Name:"The Girl Next Door",
        img:"https://cdn.kinocheck.com/i/q4ltd19i1x.jpg"
    },
    {
        Type:"Movie",
        Name:"365 days",
        img:"https://m.media-amazon.com/images/M/MV5BOTZhMDA2NjgtNGZiMC00NTE1LTk2NjctMWI3ZmZkMjQ1NGVmXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg"
   
    }
]
const mySeries = NetflixShow.filter((Web)=>{
    return  Web.Type === "Series";
}) 
// console.log(mySeries);
const myMovie = NetflixShow.filter((film)=>{
    return  film.Type === "Movie" && film.Name === "365 days"
}) 
console.log(myMovie);


