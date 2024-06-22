function calcularCredito() {
    let saldoMedio = parseFloat(document.getElementById('saldoInput').value);
    if (isNaN(saldoMedio) || saldoMedio <= 0) {
       alert("Saldo inválido!");
    return;
    }
    const limitesFaixas = [200, 400, 600]; 
 const taxasCredito = [0, 0.2, 0.3, 0.4]; 

 let faixaSaldo = 0;
    let taxaCredito = 0;
    for (let i = 0; i < limitesFaixas.length; i++) {
        if (saldoMedio <= limitesFaixas[i]) {
            faixaSaldo = i;
            taxaCredito = taxasCredito[i];
            break;
        }
    }
    const creditoEspecial = saldoMedio * taxaCredito;
 document.getElementById('resultado').innerHTML = `
        Saldo Médio Anual: R$ ${saldoMedio.toFixed(2)}\n
        Faixa de Saldo: R$ 0 a ${limitesFaixas[faixaSaldo].toFixed(2)}\n
        Taxa de Crédito: ${taxaCredito * 100}%
    Crédito Especial: R$ ${creditoEspecial.toFixed(2)}\n `;
}