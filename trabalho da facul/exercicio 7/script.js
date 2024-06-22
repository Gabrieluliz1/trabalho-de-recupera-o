function calcularValor() {
    let codigoItem = document.getElementById('codigoInput').value; // Use let for user input
    let quantidade = parseInt(document.getElementById('quantidadeInput').value); // Use let for user input
  
    if (isNaN(quantidade) || quantidade <= 0) {
      alert("Quantidade inválida!");
      return;
    }
  
    const precos = { // Use const for fixed data
      "cachorro-quente": 11.00,
      "bauru": 8.50,
      "misto-quente": 8.00,
      "hamburger": 9.00,
      "cheeseburger": 10.00,
      "refrigerante": 4.50
    };
  
    if (!precos[codigoItem]) {
      alert("Código do item inválido!");
      return;
    }
  
    let valorTotal = precos[codigoItem] * quantidade; // Use let for intermediate calculation result
  
    document.getElementById('resultado').innerHTML = `
      Item: ${codigoItem.replace("-", " ")}\n
      Quantidade: ${quantidade}\n
      Valor Unitário: R$ ${precos[codigoItem].toFixed(2)}\n
      Valor Total: R$ ${valorTotal.toFixed(2)}\n
    `;
  }