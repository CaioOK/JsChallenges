// Desafio #12 Números de Lychrel
/*
    Números palíndromos pode mser lidos da esquerda para direita ou da direita para esquerda
  com o  mesmo resultado.
  Se pegarmos o número 47 e o somarmos ao seu reverso, 74, temos 47 + 74 = 121, que é um
  número palíndromo.
  Nem todos os números geram palíndromos de forma tão rápida quanto o 47. Por exemplo 349
  349 + 943 = 1292;
  1292 + 2921 = 4213;
  4213 + 3124 = 7337 (palíndromo).
  Ou seja, 349 leva 3 iterações para gerar um palíndromo pelas somas dos resultados com
  seu reverso.

    Apesar de não ser formalmente provado, acredita-se que números como 196 jamais gerarão
  um palíndromo pelas somas dos resultados de seus resultados com os respectivos reversos.
  Um número que não gera palíndromos a partir desse processo é chamado de Número de Lychrel.
  Acredita-se que para qualquer número abaixo de 10000:

  * gerará um palíndromo a partir da soma dos resultados com seus reversos até a 50ª iteração.

  *não será possível gerar um palíndromo nem mesmo com todo o poder computacional disponível
  no mundo.

  Construa um algoritmo capaz de identificar a quantidade de números de Lychrel menores que
  um dado número N < 10000.
*/
/*
 * Complete the 'lychrel_numbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function is_palindrome(num) {
  const stringified_num = JSON.stringify(num);
  const num_length = stringified_num.length;
  let num_id_palindrome = false;

  if (num_length % 2 === 0) {
    const left_side = stringified_num.split('').slice(0, num_length / 2).reverse().join('');
    const right_side = stringified_num.split('').slice(num_length / 2).join('');

    if (left_side === right_side) num_id_palindrome = true;
  } else {
    const left_side = stringified_num.split('').slice(0, (num_length - 1) / 2).reverse().join('');
    const right_side = stringified_num.split('').slice((((num_length - 1) / 2) + 1)).join('');

    if (left_side === right_side) num_id_palindrome = true;
  }

  return num_id_palindrome;
}

function reverse_num(num) {
  const stringified_num_reverse = JSON.stringify(num).split('').reverse();

  for (let index = 0; index < stringified_num_reverse.length; index += 1) {
    if (stringified_num_reverse[index] === '0') { // Removendo zeros a esquerda xD
      stringified_num_reverse.splice(index, 1);

      index -= 1; // Precisa voltar uma casa pois um valor foi removido;
    } else {
      break;
    }
  }

  const result = JSON.parse(stringified_num_reverse.join(''));

  return result;
}

function lychrel_numbers(n) {
  // Write your code here
  const max_iterations = 50;
  let current_number = 195;
  let accumulator = 0;
  let is_lychrel_number = false;
  let lychrel_number_count = 0;

  while (current_number < n) {
    accumulator = current_number;
    is_lychrel_number = true; // Por definição é true até que no "for" prove-se o contrário

    for (let i = 0; i <= max_iterations; i += 1) {
      if (!is_palindrome(accumulator)) {
        accumulator += reverse_num(accumulator);
      } else {
        is_lychrel_number = false;
        break;
      }
    }

    if (is_lychrel_number) lychrel_number_count += 1;

    current_number += 1;
  }

  return lychrel_number_count;
}
