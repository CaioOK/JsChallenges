let booksBox = {
  spaces: 5,
  booksIn: 0
}

booksBox.addBook = function (livrosParaAdicionar = 0) {
  let { spaces } = this;
  const temSoUmLivro = this.booksIn + livrosParaAdicionar === 1;
  const maisDeUmLivro = `Já há ${this.booksIn + livrosParaAdicionar} livros na caixa`;
  const caixaCheia = this.booksIn === spaces;
  const haEspacoParaAdicionar = livrosParaAdicionar + this.booksIn <= spaces;
  const soCabeMaisUm = spaces - this.booksIn === 1;
  const cabemMais = `Só cabem mais ${spaces - this.booksIn} livros`;
  
    if (caixaCheia) {
      return "A caixa já está cheia";
  
    } else if (haEspacoParaAdicionar) {
      this.booksIn += livrosParaAdicionar;

      return (temSoUmLivro) ? 'Já há 1 livro na caixa' : maisDeUmLivro;
  
    } else {
      return (soCabeMaisUm) ? "Só cabe mais 1 livro" : cabemMais;
  
    }
}