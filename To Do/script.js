function submitForm(){
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        var data = new FormData(form);
        for (const [name,value] of data) {
          console.log(name,value)
        }
      })
}
