// Desafio #9 Menor Múltiplo
/*
  O menor número divisível por todos os números de 1 a 10 é 2520.
  Crie um algoritmo capaz de calcular o menos número divisível por
  todos os números de 1 a um dado número.
*/
/*
 * Complete the 'smallest_multiple' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER roof as parameter.
 */

function smallest_multiple(roof) {
  // Write your code here
  let smallest_multiple_found = false;
  let current_number = 0;

  while (!smallest_multiple_found) {
    current_number += 1;
    smallest_multiple_found = true;

    for (let divisor = 1; divisor <= roof; divisor += 1) {
      if (current_number % divisor !== 0) {
        smallest_multiple_found = false;
      }
    }
  }

  return current_number;
}
