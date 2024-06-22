function decompor() {
    const valor = parseFloat(document.getElementById('valorInput').value);
    let notas = { 100: 0, 50: 0, 10: 0, 5: 0, 1: 0 };
    let valorRestante = valor;

    for (const nota in notas) {
        while (valorRestante >= nota) {
            valorRestante -= nota;
            notas[nota]++;
        }
    }
    let resultado = `Valor original: R$ ${valor.toFixed(2)}\n\n`;
    for (const nota in notas) {
        if (notas[nota] > 0) {
            resultado += `${notas[nota]} nota(s) de R$ ${nota},00\n`;
        }
    }
    document.getElementById('resultado').innerHTML = resultado;
}