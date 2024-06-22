function calcularImposto() {
    let ano = parseInt(document.getElementById('anoInput').value); // Use let for user input
    let valorTabela = parseFloat(document.getElementById('valorInput').value); // Use let for user input
  
    if (isNaN(ano) || isNaN(valorTabela) || valorTabela <= 0) {
      alert("Dados inválidos!");
      return;
    }
  
    const taxa = ano < 1990 ? 0.01 : 0.015; // Use const for calculation results
    let imposto = valorTabela * taxa; // Use let for intermediate calculation result
  
    document.getElementById('resultado').innerHTML = `
      Ano de Fabricação: ${ano}\n
      Valor de Tabela: R$ ${valorTabela.toFixed(2)}\n
      Taxa: ${taxa * 100}% (Fabricação ${ano < 1990 ? 'antes' : 'depois'} de 1990)\n
      Imposto a Pagar: R$ ${imposto.toFixed(2)}\n
    `;
  }