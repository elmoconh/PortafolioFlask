function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

 function change()
 {  var elem = document.getElementById("myButton1").value;
    var icon = document.querySelector("i");

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