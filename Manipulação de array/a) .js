// Ex: 1
function somarElementos(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}
const numeros = [2, 4, 6, 8];
const resultado = somarElementos(numeros);
console.log(resultado); // 20