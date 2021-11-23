function abreServicos(evt, nomeServico) {
  var i, campoIlustracao_servicos, campoDescricao_servicos;

  // Get all elements with class="campoIlustracao_servicos" and hide them
  campoIlustracao_servicos = document.getElementsByClassName("campoIlustracao_servicos");
  for (i = 0; i < campoIlustracao_servicos.length; i++) {
    campoIlustracao_servicos[i].style.display = "none";
  }

  // Get all elements with class="campoDescricao_servicos" and remove the class "elementoAtivo_servicos"
  campoDescricao_servicos = document.getElementsByClassName("campoDescricao_servicos");
  for (i = 0; i < campoDescricao_servicos.length; i++) {
    campoDescricao_servicos[i].className = campoDescricao_servicos[i].className.replace(" elementoAtivo_servicos", "");
  }

  // Show the current tab, and add an "elementoAtivo_servicos" class to the link that opened the tab
  document.getElementById(nomeServico).style.display = "block";
  evt.currentTarget.className += " elementoAtivo_servicos";
}

// Get the element with id="selecionadoPadrao_servicos" and click on it
document.getElementById("selecionadoPadrao_servicos").click();

