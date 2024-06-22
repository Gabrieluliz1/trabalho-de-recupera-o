function OrdernarosNumeros() {
    let numero1 = parseInt(document.getElementById("Numero1").value);
    let numero2 = parseInt(document.getElementById("Numero2").value);
    let numero3 = parseInt(document.getElementById("Numero3").value);
    let numero4 = parseInt(document.getElementById("Numero4").value);
    let numero5 = parseInt(document.getElementById("Numero5").value);
    
    const numeros = [numero1, numero2, numero3, numero4, numero5];
    
    const resultado = "Números em ordem decrescente: " + numeros.join(', ');

    document.getElementById("Resultado").innerHTML = resultado;
}