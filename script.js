// Dados das linhas do metrô
const linesData = {
  azul: [
    { name: "Estação Central", status: "Normal" },
    { name: "Estação Sul", status: "Manutenção" },
    { name: "Estação Norte", status: "Inoperante" },
  ],
  rosa: [
    { name: "Estação Jardim", status: "Normal" },
    { name: "Estação Flor", status: "Normal" },
    { name: "Estação Bela Vista", status: "Manutenção" },
  ],
  lilas: [
    { name: "Estação Aurora", status: "Normal" },
    { name: "Estação Cristal", status: "Inoperante" },
    { name: "Estação Pérola", status: "Manutenção" },
  ],
};
let linhaatual = document.getElementById("line-selector");
let valorlinha = linhaatual.value;
let paragrafo = document.getElementsByTagName("p");
let stationsContainer2 = document.getElementById("stations-container");
let novo = document.getElementsByTagName("p")
// Função para atualizar as estações no DOM
function updateStations(selectedLine, stationsContainer) {
  if (selectedLine==="azul"){
    paragrafo.innerHTML(`${linesData[0]}`)
    stationsContainer.appendchild(paragrafo) 
  };
  if (selectedLine==="rosa"){
    paragrafo.innerHTML(`${linesData[1]}`)
    stationsContainer.appendchild(newe2) 
  };
  if (selectedLine==="lilas"){
    paragrafo.innerHTML(`${linesData[2]}`)
    stationsContainer.appendchild(newe2) 
  };
  if (selectedLine===""){
    paragrafo.innerHTML(`Selecione uma linha para visualizar as estações`)
    stationsContainer.appendchild(paragrafo)

}};

// Função principal para adicionar eventos (executada no navegador)
seletor = document.getElementById("line-selector");
function initApp(event) {
  event.defaultPrevented
  seletor.addEventListener("change",updateStations(valorlinha,stationsContainer2))
}

// Garantir que a função principal seja chamada apenas no navegador
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}

