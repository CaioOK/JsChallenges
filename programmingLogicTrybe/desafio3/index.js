// Desafio #3 Contagem Regressiva
/*
  Dado um número X construa um programa, que retorne a contagem regressiva
  no formato X...X-1...X-2...0!!!, por exemplo, se X = 10, retorne:
  10...9...8...7...6...5...4...3...2...1...0!!!
*/
/*
 * Complete the 'count_down' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER x as parameter.
 */

function count_down(x) {
  // Write your code here
  let result = '';

  for (let i = x; i >=0; i -= 1) {
    if (i > 0) {
      result = `${result}${i}...`
    } else {
      result = `${result}${i}!!!`
    }
  }
  
  return result;
}
