function contarLetra(str, letra) {
    str = str.toLowerCase();
    letra = letra.toLowerCase();
    
    let contador = 0;
    for (const char of str) {
      if (char === letra) {
        contador++;
      }
    }
    
    return contador;
  }
  
  console.log(contarLetra("banana", "a")); //  3
  console.log(contarLetra("Hello, world!", "o")); // 2