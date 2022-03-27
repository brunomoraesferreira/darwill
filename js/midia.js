var element = document.getElementById("deslizante");

function myFunction(x) {
  if (x.matches) { // If media query matches
   element.classList.add("deslizante-maior");
   element.classList.remove("deslizante-menor");
   
  } else {
   element.classList.remove("deslizante-maior");
   element.classList.add("deslizante-menor");
  }
}

var x = window.matchMedia("(min-width: 768px)")
myFunction(x) // Call listener function at run time
x.addEventListener(myFunction) // Attach listener function on state changes