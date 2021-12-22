//Submits the form
function submitForm(){
  const container = document.getElementById("container")
    form.addEventListener("submit", function(e){
        e.preventDefault();
        taskData = document.getElementById("activity").value;
        addingTask(taskData)
        form.reset()
        return taskData
    });
  
    
}

//Adds a task element
function addingTask(taskData){
    taskElement = document.createElement("h3");
    deleteButton = document.createElement("Button");
    taskElement.innerHTML = taskData;
    taskElement.id = "taskElement"
    deleteButton.innerHTML ="Delete";
    //deleteButton.id = taskData;
    deleteButton.addEventListener("click", deletingTask)
    document.body.appendChild(taskElement)
    document.body.appendChild(deleteButton)
    
}

function deletingTask(){
  container.addEventListener("click", function(e) {
    const tgt = e.target;
    if (tgt.classList.contains("delete")) {
     //Removes a task element
      tgt.closest("div").remove();
    }
  })
}


// //Removes a task element
// function deletingTask(){
//     taskElement.remove()
//     deleteButton.remove()
// }
