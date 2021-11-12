// Desafio #4 Múltiplos de 3 ou 5
/*
  Construa um algoritmo que encontre a soma de todos os números naturais
  múltiplos de 3 ou 5 menores que um dado número.

  Por exemplo, quando listamos todos os números naturais menores que 10
  que são múltiplos de 3 ou 5 temos: 3, 5, 6 e 9.
  A soma desses números é 3 + 5 + 6 + 9 = 23;
*/
/*
 * Complete the 'multiples_of_3_or_5' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER roof as parameter.
 */

function multiples_of_3_or_5(roof) {
  // Write your code here
  let result = 0;

  for (let num = 1; num < roof; num += 1) {

    if (num % 3 === 0 || num % 5 === 0) {
      result += num;
    }
  }

  return result;
}