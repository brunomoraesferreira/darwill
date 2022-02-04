function recarregarPagina(){
  // Sem redimencionamento à 100ms!
  location.reload();
}

var x;
window.onresize = function(){
  clearTimeout(x);
  x = setTimeout(recarregarPagina, 100);
};