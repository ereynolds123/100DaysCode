// function submitForm(){
//     form.addEventListener("submit", function(e) {
//         e.preventDefault();
//         var data = new FormData(form);
//         for (const [name,value] of data) {
//           console.log(name,value)
          
//         }
//         //form.reset()
//       })
      
      
// }


function submitForm(){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        taskData = document.getElementById("activity").value;
        // console.log("To do: "+ taskData)
        addingTask()
        return taskData
    })
    
}

function addingTask(){
    let taskElement = document.createElement("h3");
    deleteButton = document.createElement("Button");
    taskElement.innerHTML = taskData;
    deleteButton.innerHTML ="Delete";
    deleteButton.id ="deleteButton";
    document.body.appendChild(taskElement)
    document.body.appendChild(deleteButton)
}



function deletingTask(){
    console.log("Deleted")
}