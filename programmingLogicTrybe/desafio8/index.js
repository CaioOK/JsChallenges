// Desafio #8 Caixa de Supermercado
/*
  Um atendente de supermercado deve lançar os valores dos produtos à medidada que os passa
  no caixa.
  Eventualmente ele faz um lançamento errado e para invalidá-lo deve lançar o valor 0 (zero)
  para que o registro anterior não seja considerado.
  Na eventualidade de mais de um valor ser lançado errado consecutivamente o atendente lançará
  tantos valores zero quanto necessários para apagar os registros incorretos.
  Por exemplo, no lançamento: 1, 3, 5, 4, 0, 0, 7, 0, 0, 6 serão considerados para a soma os
  valores 1, 6 visto que os valores 3, 5, 4 e 7 foram anulados pelos 0.

  Construa um algoritmo capaz de processar uma entrada de n números  e apresentar na saída a
  SOMA DOS REGISTROS VÁLIDOS.
  Considere a entrada do algoritmo sendo uma lista da seguinte forma[n1, n2, n3, n4, ... nx].
  No exemplo acima a entrada seria [1, 3, 5, 4, 0, 0, 7, 0, 0, 6].
*/
/*
 * Complete the 'caixa' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY values as parameter.
 */

/*
  Comments:
    #1: Caso o valor for zero, ele mesmo é removido e também o valor anterior.

    #2: Quando um 0 e o valor anterior é removido o índex tem que voltar duas posições
    para corrigir devido a remoção destes dois valores no método splice();
    
*/

function caixa(values) {
  // Write your code here
  const values_copy = [...values];
  let index = 0;
  
  while (index < values_copy.length) {
    if (values_copy[index] === 0) {
      values_copy.splice(index, 1); // #1
      values_copy.splice(index - 1, 1); // #1

      index >= 2 ? index -= 2 : index = 0; // #2
    }

    index += 1;
  }

  const result = values_copy.reduce((total, value) => total + value, 0)

  return result;
}
