const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inputtype = document.getElementById("input-type");

function addTask(){
    if(inputBox.value === '' || inputtype.value === "" ){
        alert("you must write something!");
    }
    else {
        let li=document.createElement("li");
        li.innerHTML= `${inputBox.value} - ${inputtype.value}`;
        listContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    inputtype.value="";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();