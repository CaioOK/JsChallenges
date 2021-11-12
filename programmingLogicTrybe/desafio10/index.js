// Desafio #10 Diferença das somas dos quadrados e quadrados da soma
/*
  O quadrado da soma dos 10 primeiros números naturais é dado por:
  (1 + 2 + ... + 10)² = 55² = 3025
  A soma dos quadrados dos primeiros 10 números naturais é dada por:
  1², + 2² + ... + 10² = 385.
  A diferença entre o quadrado da soma dos 10 primeiros números naturais
  é dada por 3025 - 385 = 2640.
  Dado um número natural N, construa um algoritmo capaz de calcular a
  diferença entre o quadrado da soma e a soma dos quadrados dos N
  primeiros números naturais.
*/
/*
 * Complete the 'sum_square_difference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function sum_square_difference(n) {
  let sum_to_square = 0;
  let square_to_sum = 0;

  for (let increment = 1; increment <= n; increment += 1) {
    sum_to_square += increment;
    square_to_sum += Math.pow(increment, 2);
  }

  const result = Math.pow(sum_to_square, 2) - square_to_sum;

  return result;
}
