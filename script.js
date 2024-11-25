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
    // SEU CÓDIGO AQUI
    let selectedLine = document.getElementById("line-selector")
    let stationsContainer =document.getElementById("container")
    let selectedLine = document.createElement("p")
    selectedLine.innerHTML(azul)
    stationsContainer.appendChild(selectedLine)
    // n sei fazer essas questões, n lembro, n estudei dom considera o que da pra conseiderar ai
  }
  
  
  // Função principal para adicionar eventos (executada no navegador)
  function initApp(stationsContainer) {
    // SEU CÓDIGO AQUI
    
    
  }
  
  // Garantir que a função principal seja chamada apenas no navegador
  if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", initApp);
  }
  
  // Exportar dados e função para testes
  module.exports = { linesData, updateStations };
  
