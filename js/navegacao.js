function menusite(evt, guianome) {
    var i, conteudo, navlinks;
    conteudo = document.getElementsByClassName("secionamento");
    for (i = 0; i < conteudo.length; i++) {
      conteudo[i].style.display = "none";
    }
    navlinks = document.getElementsByClassName("navlinks");
    for (i = 0; i < navlinks.length; i++) {
      navlinks[i].className = navlinks[i].className.replace(" active", "");
    }
    document.getElementById(guianome).style.display = "flex";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
