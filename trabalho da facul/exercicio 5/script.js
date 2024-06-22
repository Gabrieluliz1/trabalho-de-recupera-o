function calcularAumento() {
    let cargo = document.getElementById('cargoInput').value; 
    let salarioAtual = parseFloat(document.getElementById('salarioInput').value); 
    if (isNaN(salarioAtual) || salarioAtual <= 0) {
      alert("Salário inválido!");
      return;
    }
    const aumentoPorCargo = {
      gerente: 0.1,
      engenheiro: 0.2,
      tecnico: 0.3
    };
    let novoSalario = salarioAtual;
    let percentualAumento;
    if (aumentoPorCargo[cargo]) {
      percentualAumento = aumentoPorCargo[cargo] * 100;
      novoSalario *= (1 + aumentoPorCargo[cargo]);
    } else {
      percentualAumento = 40;
      novoSalario *= 1.4;
    }
    const diferencaSalario = novoSalario - salarioAtual;
    document.getElementById('resultado').innerHTML = `
      Cargo: ${cargo}\n
      Salário Atual: R$ ${salarioAtual.toFixed(2)}\n
      Percentual de Aumento: ${percentualAumento}%${cargo in aumentoPorCargo ? ' (conforme tabela)' : ' (aumento geral)'}
      Novo Salário: R$ ${novoSalario.toFixed(2)}\n
      Diferença: R$ ${diferencaSalario.toFixed(2)}\n
    `;
  }