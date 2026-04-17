let Color_Change = document.getElementById("Color_Change");
let container = document.getElementById("container");
let  p = document.querySelector("p");
const color = ["red", "green" ,"grey","lightblue","pink","Yellow","gold"]
let colorIndex = color.length  ;

Color_Change.onclick = () =>{
    const RandomColor =   color[Math.floor(Math.random() * colorIndex)];
    container.style.backgroundColor = RandomColor ;
    p.innerHTML = RandomColor;  
}
