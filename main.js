var texto = ""
historial = document.getElementById("historial")
historial.style.display = "none"
var center;
var historial_de_calculos = []
var t = 0
var x = document.getElementById("texto")
function historial(){
  alert(7)
}
function mas(){
  texto += "+"
  x.innerHTML = texto
}
function menos(){
  texto += "-"
  x.innerHTML = texto
}
function por() {
  texto += "×"
  x.innerHTML = texto
}
function division(){
  texto += "÷"
  x.innerHTML = texto
  
}
function parent(){
  t += 1
  if(t == 1){
    texto += "("
    x.innerHTML = texto
  }
  else{
    t = 0
    texto += ")"
    x.innerHTML =  texto
  }
}

function uno() {
  texto += "1"
  x.innerHTML = texto
}
function dos() {
  texto += "2"
  x.innerHTML = texto
  if(texto == "7392"){
    x.innerHTML = "Neta es feo"
    x.onclick = function (){
      center = document.getElementById("todo")
      center.style.display = "none";
      historial.style.display = ""
      
      historial = document.getElementById("historial")
      var texto = ""
      for (var i of historial_de_calculos){
        for(var x of i){
          if(x == "×"){
            i = i.replace("×","*")
          }
          if(x == "÷"){
            i = i.replace("÷","/")
          }
        }
        texto += `<br /><b class="problema">${i} = </b>
        <b class="respuesta" style="color:green"> ${eval(i)}</b>
        <hr style="background-color:blue; height:10px;"/>`
      }
      historial.innerHTML = texto
      function volver(){
        center.style.display = ""
      }
      
      
    }
  }
}
function tres() {
  texto += "3"
  x.innerHTML = texto
}
function cuatro() {
  texto += "4"
  x.innerHTML = texto
}
function cinco() {
  texto += "5"
  x.innerHTML = texto
}
function seis() {
  texto += "6"
  x.innerHTML = texto
}
function siete() {
  texto += "7"
  x.innerHTML = texto
}
function ocho() {
  texto += "8"
  x.innerHTML = texto
}
function nueve() {
  texto += "9"
  x.innerHTML = texto
}
function cero() {
  texto += "0"
  x.innerHTML = texto
}
function punto(){
  texto += "."
  x.innerHTML = texto
}
function igual() {
  historial_de_calculos.push(texto)
  for (i of texto){
    if(i == "×"){
      texto=texto.replace("×","*")
    }
    if(i == "÷"){
      texto=texto.replace("÷","/")
    }
  }
  
  texto = `${eval(texto)}`
  x.innerHTML = texto
}
function ac(){
  texto = ""
  x.innerHTML = texto
}
function del(){
  texto2=texto.substring(0,texto.length -1)
  texto = texto2
  x.innerHTML = texto
}
