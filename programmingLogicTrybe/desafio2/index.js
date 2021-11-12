// Desafio #2 Diferença
/*
  Dado um número X, retorne a diferença entre X e 10 de forma que o resutltado
  seja sempre um valor positivo. Isto é:
  se X < 10, faça 10 - X, por exemplo, se X = 3, retorne 7 (10 - 3)
  
  se X > 10, faça X - 10, por exemplo, se X = 15, retorne 5 (15-10)
*/
/*
 * Complete the 'difference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER x as parameter.
 */

function difference(x) {
  // Write your code here
  const diff = x - 10;

  const result = Math.sqrt(Math.pow(diff, 2));

  return result;
}
