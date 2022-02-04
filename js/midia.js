var element = document.getElementById("deslizante-aprendizado");

function myFunction(x) {
  if (x.matches) { // If media query matches
   element.classList.add("slider");
   
  } else {
   element.classList.remove("slider");

  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addEventListener(myFunction) // Attach listener function on state changes

