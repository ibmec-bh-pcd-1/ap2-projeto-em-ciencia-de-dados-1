// Dados das linhas do metrô
const linesData = {
  " ":[{name:"Selecione uma linha para vizualizar as informações", status:""}],

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

const cssDict = {
  "Normal": "normal",
  "Manutenção": "manutenção",
  "Inoperante": "inoperante"
}

// Função para atualizar as estações no DOM
function updateStations() {
  selectedLine = document.getElementById("line-selector").value
  stationsContainer = document.getElementById("stations-container")
  stationsContainer.innerHTML = ``
  for (key in linesData[selectedLine]){
    stationsContainer.innerHTML += `<p class = "${cssDict[linesData[selectedLine][key]["status"]]}">${linesData[selectedLine][key]["name"]} - ${linesData[selectedLine][key]["status"]}</p>`
  }
  
}


function initApp() {
  lineSelector = document.getElementById("line-selector")
  // SEU CÓDIGO AQUI
}

// Garantir que a função principal seja chamada apenas no navegador
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}


// Exportar dados e função para testes
module.exports = { linesData, updateStations };
