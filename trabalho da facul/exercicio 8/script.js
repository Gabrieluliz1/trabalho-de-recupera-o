function calcularPesoIdeal() {
    let altura = parseFloat(document.getElementById('alturaInput').value);
    let sexo = document.getElementById('sexoSelect').value;
  
    if (isNaN(altura) || altura <= 0) {
      alert("Altura inválida!");
      return;
    }
  
    let pesoIdeal; // Use let for the variable that needs to be reassigned
  
    if (sexo === "masculino") {
      pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "feminino") {
      pesoIdeal = (62.1 * altura) - 44.7;
    } else {
      alert("Sexo inválido!");
      return;
    }
  
    document.getElementById('resultado').innerHTML = `
      Altura: ${altura.toFixed(2)} cm\n
      Sexo: ${sexo}\n
      Peso Ideal: ${pesoIdeal.toFixed(2)} kg\n
    `;
  }