function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

 function change()
 {  var elem = document.getElementById("myButton1").value;
    var icon = document.querySelector("i");
   console.log(elem);


     if (elem == "Oscuro"){
        document.getElementById("myButton1").value="Claro"; 
        this.darkMode();
        this.change_icon(icon);

     }else {
        document.getElementById("myButton1").value="Oscuro"; 
        this.darkMode();
        this.change_icon(icon);

     }

 }


 function change_icon(icon){

    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    

 }

 function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  