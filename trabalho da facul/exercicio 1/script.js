function verificarTriangulo(){
    let LadoY = parseInt(document.getElementById("LadoY").value);
    let LadoZ = parseInt(document.getElementById("LadoZ").value);
    let LadoX = parseInt(document.getElementById("LadoX").value);

    const resultado = verificarComprimentodoTiangulo(LadoY, LadoZ, LadoX);
    document.getElementById("resultado").innerHTML = resultado;
}

function verificarComprimentodoTiangulo(x, y, z) {
    if (y + z <= x || z + x <= y || x + y <= z) {
      return "Os valores não formam um triângulo.";
    } else {
      if (x == y && y == z) {
        return "Triângulo equilátero.";
      } else if (x == y || y == z || z == x) {
        return "Triângulo isósceles.";
      } else {
        return "Triângulo escaleno.";
      }
    }
  }
