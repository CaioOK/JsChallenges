// Desafio #13 Soma dos Dígitos
/*
  Escreva um programa capaz de encontrar quantos números entre 0 e 1000 têm a soma
  dos seus dígitos igual a um dado número S.
  
  Por exemplo, para S = 26 temos 3 números, 899 989 e 998, cujas somas dos
  algarismos é igual a S.
*/
/*
 * Complete the 'digits_sum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number_s as parameter.
 */

function sum_num_digits(num) {
  const stringified_splited_num = JSON.stringify(num).split('');
  const array_of_digits = stringified_splited_num.map((number) => JSON.parse(number));
  const result = array_of_digits.reduce((acc, curr) => acc + curr, 0);

  return result;
}

function digits_sum(number_s) {
  // Write your code here
  let count = 0;

  for (let i = 1; i <= 1000; i += 1) {
    const result = sum_num_digits(i);

    if (result === number_s) count += 1;
  }

  return count;
}
