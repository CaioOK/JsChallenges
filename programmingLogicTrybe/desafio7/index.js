// Desafio #7 Maior divisor primo
/*
  Números primos são aqueles que são divisíveis exclusivamente por 1 e por eles mesmos.
  Ex: 2, 3, 5, 7, 11, 13, 17, 19.
  Os divisores primos de 13195, por exemplo, são 5, 7, 13 e 29.
  Encontre o maior divisor primo de um dado número
*/
/*
 * Complete the 'largest_prime_factor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 */
/*  Comments:
  #1: Desta forma o current_prime_divisor receberá o 
  último divisor primo que por consequência será o maior.
*/
function is_prime(number) {
  if (number === 2) return true;

  let number_is_prime = true; // Todo número é primo até que se prove o contrário haha

  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) number_is_prime = false;
  }

  return number_is_prime;
}

function largest_prime_factor(number) {
  // Write your code here
  let current_prime_divisor = null;
  const array_of_divisors = [];

  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      array_of_divisors.push(divisor);
    }
  }

  array_of_divisors.forEach((divisor) => {
    if (is_prime(divisor)) current_prime_divisor = divisor; // Comment #1
  });

  return current_prime_divisor;
}
