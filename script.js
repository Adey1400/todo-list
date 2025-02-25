const taskInput= document.getElementById("taskInput");
const tasklist= document.getElementById("taskList");
function addTask(){
    if(taskInput.value===""){
        alert("you must write something");
    }else{
        let li= document.createElement("li")
        li.classList.add("text")
        li.innerHTML=taskInput.value;
        tasklist.appendChild(li);
        let checkbox = document.createElement("input"); 
        checkbox.type = "checkbox";
        checkbox.checked = false
        li.appendChild(checkbox);
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });
        

        let spanlist = document.createElement("span");
        spanlist.innerHTML="&#128465"
        spanlist.classList.add("delete-btn")
        spanlist.onclick = function () {
             li.remove(); 
        };
        li.appendChild(spanlist);
        
    }
    taskInput.value="";
}