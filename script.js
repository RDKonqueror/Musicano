function myFunction() {
  document.getElementById("genreList").classList.toggle("show");
}

window.onclick=function(event) {

  if(!event.target.matches(".browse-btn")) {

    var dropdowns=document.getElementsByClassName(".genres");

    var i;
    for(i=0; i<dropdowns.length; i++) {

      var openDropdown=dropdowns[i];

      if(openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }

    }

  }

}