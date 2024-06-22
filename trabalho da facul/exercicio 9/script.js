function calcularValorFinal() {
    const preco = parseFloat(document.getElementById('precoInput').value);
    const condicaoPagamento = document.getElementById('condicaoPagamentoSelect').value;
    if (isNaN(preco) || preco <= 0) {
      alert("Preço Não Coencidem!");
      return;
    }
    let valorFinal = preco; 
    switch (condicaoPagamento) {
      case 'a':
        valorFinal *= 0.9;
        break;
      case 'b':
        valorFinal *= 0.85;
        break;
      case 'd':
        valorFinal *= 1.1;
        break;
    }
    document.getElementById('resultado').innerHTML = `
      Preço do Produto: R$ ${preco.toFixed(2)}\n
      Condição de Pagamento: ${condicaoPagamento}\n
      Valor Final: R$ ${valorFinal.toFixed(2)}\n
    `;
  }