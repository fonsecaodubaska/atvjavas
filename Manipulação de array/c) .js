function removerDuplicados(array) {
    return Array.from(new Set(array));
  }
  
  

  const arrayComDuplicados = [1, 2, 2, 3, 4, 4, 5];
  const arraySemDuplicados = removerDuplicados(arrayComDuplicados);
  console.log(arraySemDuplicados);