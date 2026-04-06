let inputBox = document.getElementById("inputBox");
let Addtask =  document.getElementById("Addtask"); 
let taskStorage = document.getElementById("taskStorage");

Addtask.onclick = function(){
    if(inputBox.value === ""){
        alert("you wrtie something and click");
    }
    else if(inputBox.value !== ""){
        let li = document.createElement("li");
        taskStorage.appendChild(li);
        li.innerHTML = inputBox.value ;

        let span = document.createElement("span");
        li.appendChild(span);
        span.innerHTML = "X" ;
      
    }
    inputBox.value = "";
        saveData();
}

taskStorage.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList?.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);

const saveData = () =>{
    localStorage.setItem("data" , taskStorage.innerHTML)
}
const showtask = () =>{
    taskStorage.innerHTML = localStorage.getItem("data")
}
showtask();