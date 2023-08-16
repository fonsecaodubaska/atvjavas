function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
      return "par";
    } else {
      return "ímpar";
    }
  }
  
  console.log(verificarParOuImpar(4)); //  par
  console.log(verificarParOuImpar(7)); // ímpar