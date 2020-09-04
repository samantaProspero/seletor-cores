verm = document.getElementById('vermelho')
verde = document.getElementById('verde')
azul = document.getElementById('azul')
displayVerm = document.getElementById('display-vermelho')
displayVerde= document.getElementById('display-verde')
displayAzul = document.getElementById('display-azul')
quad = document.getElementById('quadrado')
quad.style.backgroundColor = '#000'

function calcVerm() {
  displayVerm.value = verm.value
  quad.style.backgroundColor = `rgb(${Number(displayVerm.value)},${Number(displayVerde.value)},${Number(displayAzul.value)})`
  return
} 
function calcVerde() {
  displayVerde.value = verde.value
  quad.style.backgroundColor = `rgb(${Number(displayVerm.value)},${Number(displayVerde.value)},${Number(displayAzul.value)})`
  return 
}
function calcAzul() {
  displayAzul.value = azul.value
  quad.style.backgroundColor = `rgb(${Number(displayVerm.value)},${Number(displayVerde.value)},${Number(displayAzul.value)})`
  return 
}

