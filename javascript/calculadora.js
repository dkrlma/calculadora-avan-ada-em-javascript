function adicionar(valor) {
    var resultado = document.getElementById("resultado");
    if (resultado.value === "ERROR") {
      resultado.value = "";
    }
    if (valor === "+" || valor === "-" || valor === "*" || valor === "/") {
      if (resultado.value === "") {
        resultado.value = "ERROR";
      } else {
        resultado.value += valor;
      }
    } else if (valor === ".") {
      if (resultado.value === "" || resultado.value.slice(-1) === "." || !isNaN(resultado.value.slice(-1))) {
        resultado.value += ".";
      } else {
        resultado.value = "ERROR";
      }
    } else if (!isNaN(valor)) {
      resultado.value += valor;
    } else {
      resultado.value = "ERROR";
    }
  }
  
  function calcular() {
    var resultado = document.getElementById("resultado");
    if (resultado.value === "") {
      resultado.value = "ERROR";
    } else {
      resultado.value = eval(resultado.value);
    }
  }
  
  function limpar() {
    document.getElementById("resultado").value = "";
  }