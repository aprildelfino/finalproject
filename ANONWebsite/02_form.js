var submit = document.getElementById("submit"),
    nameInp = document.getElementById("nameInp"),
    color = document.getElementById("color");


submit.addEventListener("click", function() {
    var formstuff = {
        name:nameInp.value,
        color:color.value
    }
    
    localStorage.setItem("formstore", JSON.stringify(formstuff));
    
    window.location.href = "03_newroom.html";
});
