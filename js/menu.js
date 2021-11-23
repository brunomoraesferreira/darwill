function abreMenuPortfolio(evento, nomeAba) {
  var i, conteudoPortfolio, tablinks;

  // Get all elements with class="conteudoPortfolio" and hide them
  conteudoPortfolio = document.getElementsByClassName("conteudoPortfolio");
  for (i = 0; i < conteudoPortfolio.length; i++) {
    conteudoPortfolio[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "elementoAtivo_portfolio"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" elementoAtivo_portfolio", "");
  }

  // Show the current tab, and add an "elementoAtivo_portfolio" class to the link that opened the tab
  document.getElementById(nomeAba).style.display = "flex";
  evento.currentTarget.className += " elementoAtivo_portfolio";
}

// Get the element with id="selecionadoPadrao_portfolio" and click on it
document.getElementById("selecionadoPadrao_portfolio").click();

