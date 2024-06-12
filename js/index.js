var SetaDireita = document.getElementById("seta-direita");
var Leonardo = document.getElementById("Leonardo");
var Samanta = document.getElementById("Samanta");
var Bruna = document.getElementById("Bruna");
var SetaEsquerda = document.getElementById("seta-esquerda");

function Direita() {
  Samanta.style.display = "none";
  Leonardo.style.display = "flex ";
  SetaDireita.style.display = "none";
  SetaEsquerda.style.display = "flex";
  Leonardo.style.marginLeft = "-77px";
  SetaEsquerda.style.marginLeft = "-100px";
}

function Esquerda() {
  Leonardo.style.display = "none";
  Samanta.style.display = "flex";
  SetaDireita.style.display = "flex";
  SetaEsquerda.style.display = "none";
  Samanta.style.marginLeft = "0px";
  SetaDireita.style.marginLeft = "-20px";
}
