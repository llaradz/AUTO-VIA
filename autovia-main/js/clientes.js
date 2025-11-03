function mascaraTelefone() {
  var telefone = document.getElementById("telefone");
  var valor = telefone.value;

  // tira tudo que não for número
  valor = valor.replace(/\D/g, "");

  // coloca os parênteses e o traço conforme digita
  if (valor.length > 0) {
    valor = "(" + valor;
  }
  if (valor.length > 3) {
    valor = valor.slice(0, 3) + ") " + valor.slice(3);
  }
  if (valor.length > 10) {
    valor = valor.slice(0, 10) + "-" + valor.slice(10, 14);
  }

  // limita o tamanho máximo
  telefone.value = valor.substring(0, 15);
}
