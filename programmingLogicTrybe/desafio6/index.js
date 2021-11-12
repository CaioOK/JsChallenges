// Desafio #6 Enésimo Primo
/*
  Um número primo é um número natural que é divisível exclusivamente por 1 e por ele mesmo.
  Construa um algoritmo capaz de calcular o enésimo número primo para um dado número N.
  Por exemplo, para N = 6, tem-se os 6 primeiros números primos (2, 3, 5, 7, 11, 13)
  onde 13 é o sexto número primo.
*/
/*
 * Complete the 'nth_prime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function nth_prime(n) {
  // Write your code here
  let quantity_of_primes = 1;
  let current_number = 3;
  let current_prime = 2;
  let isPrime = true; // Todo número é primo até que se prove o contrário xD

  if (n === 1) return 2;

  while (quantity_of_primes < n) {
    for (let i = 2; i < current_number; i += 1) {
      if (current_number % i === 0) isPrime = false;
    }

    if (isPrime) {
      quantity_of_primes += 1;
      current_prime = current_number;
    }

    current_number += 1;
    isPrime = true;
  }

  return current_prime;
}