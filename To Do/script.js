//Submits the form
function submitForm(){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        taskData = document.getElementById("activity").value;
        addingTask(taskData)
        form.reset(taskData)
        return taskData
    })
    
}

//Adds a task element
function addingTask(taskData){
    taskElement = document.createElement("h3");
    deleteButton = document.createElement("Button");
    taskElement.innerHTML = taskData;
    taskElement.id = "taskElement"
    deleteButton.innerHTML ="Delete";
    deleteButton.id ="deleteButton";
    deleteButton.addEventListener("click", deletingTask)
    document.body.appendChild(taskElement)
    document.body.appendChild(deleteButton)
    
}


//Removes a task element
function deletingTask(){
    taskElement.remove()
    deleteButton.remove()
}