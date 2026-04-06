let inputBox = document.getElementById("inputBox");
let minusbtn = document.getElementById("minusbtn");
let resetbtn = document.getElementById("resetbtn");
let plusbtn = document.getElementById("plusbtn");

let i = 0 ;
plusbtn.onclick = ()=>{
    i++ ;
    inputBox.innerHTML = i ;
}
minusbtn.onclick = ()=>{
    i--;
    inputBox.innerHTML = i ;
}
resetbtn.onclick = ()=>{
    i = "" ;
    inputBox.innerHTML = i ;
}