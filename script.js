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
    if (selectedLine == "azul"){
      change
      return azul
    }
    else if (selectedLine == "rosa"){
      change
      return rosa
    }
    else if (selectedLine == "lilas"){
      change
      return lilas
    }
}

// Função principal para adicionar eventos (executada no navegador)
function initApp() {
    return selectedLine
}

// Garantir que a função principal seja chamada apenas no navegador
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}

// Exportar dados e função para testes
module.exports = { linesData, updateStations };