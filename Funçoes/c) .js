function calcularMediaAritmetica(arrayDeNumeros) {
    if (arrayDeNumeros.length === 0) {
      return 0;
    }
  
    const soma = arrayDeNumeros.reduce((total, numero) => total + numero, 0);
    const media = soma / arrayDeNumeros.length;
    return media;
  }
  
  const numeros = [10, 20, 30, 40, 50];
  const media = calcularMediaAritmetica(numeros);
  console.log(media); //30