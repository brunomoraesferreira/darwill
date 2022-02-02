var element = document.getElementById("deslizante-aprendizado");

function myFunction(x) {
  if (x.matches) { // If media query matches
   element.classList.add("midiaMaior");
   element.classList.remove("midiaMenor");
  } else {
   element.classList.add("midiaMenor");
   element.classList.remove("midiaMaior");

  }
}

var x = window.matchMedia("(min-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes