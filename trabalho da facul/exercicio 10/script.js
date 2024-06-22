function calcularSalario() {
    const nivel = parseInt(document.getElementById('nivelSelect').value);
    const horasAula = parseInt(document.getElementById('horasInput').value);
    if (isNaN(nivel) || nivel < 1 || nivel > 3 || isNaN(horasAula) || horasAula <= 0) {
      alert("Dados inválidos!\n - Nível deve ser entre 1 e 3.\n - Horas/aula devem ser um número maior que zero.");
      return;
    }
    let valorHoraAula;

    switch (nivel) {
      case 1:
        valorHoraAula = 12.00;
        break;
      case 2:
        valorHoraAula = 17.00;
        break;
      case 3:
        valorHoraAula = 25.00;
        break;
      default:
        alert("Nível inválido!");
        return;
    }
  
    const salario = valorHoraAula * horasAula * 4.5;
    document.getElementById('resultado').innerHTML = `
      Nível do Professor: ${nivel}\n
      Horas/Aula na Semana: ${horasAula}\n
      Valor Hora/Aula: R$ ${valorHoraAula.toFixed(2)}\n
      Salário Bruto: R$ ${salario.toFixed(2)}\n
    `;
  }