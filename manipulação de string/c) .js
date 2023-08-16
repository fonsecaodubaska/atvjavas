function palavrasEmOrdemReversa(str) {
    const palavras = str.split(" ");
    const palavrasReversas = palavras.reverse();
    const resultado = palavrasReversas.join(" ");
    return resultado;
  }
  
  console.log(palavrasEmOrdemReversa("Eu sou bonito!")); //  Ira ficar "bonito sou eu"
  console.log(palavrasEmOrdemReversa("luffy sola o verso de naruto")); // ira ficar "naruto do verso o sola luffy"