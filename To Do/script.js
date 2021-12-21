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
        var taskData = document.getElementById("activity").value;
        console.log("To do: "+ taskData)
        
    })
    
}

