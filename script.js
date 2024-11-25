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

// Função para atualizar as estações no DOM
function updateStations(selectedLine, stationsContainer) {
  selectedLine = document.getElementById('line-selector');
  let stationsContainer = document.getElementById ('stations-container');
  const change = document.addEventListener ('on click', stationsContainer())
  if (linesDate.azul === selectedLine[1]) {
    console.log(selectedLine.azul);
  } else if (selectedLine(rosa) === stationsContainer) {
    console.log (selectedLine.rosa);
  } else if (selectedLine(lilas)=== stationsContainer) {
    console.log(selectedLine.lilas);
  }
}

// Função principal para adicionar eventos (executada no navegador)
function initApp() {
  const change = document.addEventListener ('on click', updateStations()){
  }
}

// Garantir que a função principal seja chamada apenas no navegador
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}

// Exportar dados e função para testes
module.exports = { linesData, updateStations };
