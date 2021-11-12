// Desafio #5 Números Pares da Série de Fibonacci
/*
  Na Série de Fibonacci um número é determinado pela soma de seus dois antecessores.
  A série é iniciada com os valores 1, 2 e a partir do terceiro elemento raliza-se
  essa conta.
  Dessa forma, os 10 primeiros elementos dessa série são: 1, 2, 3, 5, 8, 13, 21, 34,
  55, 89.
  A soma dos números pares menores que 100 dessa série é 44.
  Calcule a soma dos números pares entre os elementos dessa série que sejam menores
  que um dado número.

  *Algumas referências apontam a série de Fibonacci começando em 0. Nesse caso a série
  seria: 0, 1, 1, 2, 3, 5... Para efeito dessa atividade consideraremos a série iniciando
  em 1, 2 conforme o enunciado acima.
*/
/*
 * Complete the 'even_fibonacci_numbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER roof as parameter.
 */

function even_fibonacci_numbers(roof) {
  // Write your code here
  let a = 1;
  let b = 2;
  let result = 2;

  for (let i = 3; i < roof; i += 1) {
    const num = a + b;

    if (num % 2 === 0 && num < roof) result += num;

    if (num > roof) return result;

    a = b;
    b = num;
  }
}
