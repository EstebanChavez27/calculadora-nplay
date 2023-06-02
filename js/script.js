function calcularIVA() {
    var montoConIVA = parseFloat(document.getElementById("montoConIVA").value);
    var montoSinIVA = parseFloat(document.getElementById("montoSinIVA").value);
    var iva = 0.21; // 21% de IVA
    
    if (!isNaN(montoConIVA)) {
      var resultadoSinIVA = montoConIVA / (1 + iva);
      var resultadoIVA = montoConIVA - resultadoSinIVA;
      
      document.getElementById("resultado").innerHTML = "Monto sin IVA: " + resultadoSinIVA.toFixed(2) + "<br>IVA: " + resultadoIVA.toFixed(2);
    } else if (!isNaN(montoSinIVA)) {
      var resultadoConIVA = montoSinIVA * (1 + iva);
      var resultadoIVA = resultadoConIVA - montoSinIVA;
      
      document.getElementById("resultado").innerHTML = "Monto con IVA: " + resultadoConIVA.toFixed(2) + "<br>IVA: " + resultadoIVA.toFixed(2);
    } else {
      document.getElementById("resultado").innerHTML = "Por favor ingrese un monto.";
    }
  }
  
  function calcularTotalMensual() {
    var resultado = parseFloat(document.getElementById("resultado").innerHTML.split(": ")[1]);
    var diasSeleccionados = parseInt(document.getElementById("diasSeleccionados").value);
    var multiplicador = parseFloat(document.getElementById("multiplicador").value);
    
    if (!isNaN(resultado) && !isNaN(diasSeleccionados) && !isNaN(multiplicador)) {
      var totalMensual = resultado / diasSeleccionados * multiplicador;
      document.getElementById("totalMensual").innerHTML = "Total a ajustar: $" + totalMensual.toFixed(2);
    } else {
      document.getElementById("totalMensual").innerHTML = "Por favor complete los campos requeridos.";
    }
  }
  
  function limpiarFormulario() {
    document.getElementById("montoConIVA").value = "";
    document.getElementById("montoSinIVA").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("diasSeleccionados").value = "";
    document.getElementById("multiplicador").value = "";
    document.getElementById("totalMensual").innerHTML = "";
  }
  