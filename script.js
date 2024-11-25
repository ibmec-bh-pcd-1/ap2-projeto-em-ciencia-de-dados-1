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
  if (selectedLine === "azul") {
    document.createElement("azul")
    document.createTextNode(
      linesData[selectedLine][0]["name"] + "-" + linesData[selectedLine]["status"],
      linesData[selectedLine][1]["name"] + "-" + linesData[selectedLine]["status"],
      linesData[selectedLine][2]["name"] + "-" + linesData[selectedLine]["status"]
    )
    document.appendChild(stationsContainer)

  } else if (selectedLine === "rosa") {
    document.createElement("azul")
    document.createTextNode(
      linesData[selectedLine][0]["name"] + "-" + linesData[selectedLine]["status"],
      linesData[selectedLine][1]["name"] + "-" + linesData[selectedLine]["status"],
      linesData[selectedLine][2]["name"] + "-" + linesData[selectedLine]["status"]
    )
    document.appendChild(stationsContainer)
  } else {
    document.createElement("azul")
    document.createTextNode(
      linesData[selectedLine][0]["name"] + "-" + linesData[selectedLine]["status"],
      linesData[selectedLine][1]["name"] + "-" + linesData[selectedLine]["status"],
      linesData[selectedLine][2]["name"] + "-" + linesData[selectedLine]["status"]
    )
    document.appendChild(stationsContainer)
  }
}

// Função principal para adicionar eventos (executada no navegador)
function initApp() {
  let select = document.getElementById("line-selector")
  document.addEventListener('click', select)
  let container = document.getElementById("stations-container")
  document.addEventListener('change', container)
  updateStations(select, container)
}

// Garantir que a função principal seja chamada apenas no navegador
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}

// Exportar dados e função para testes
module.exports = { linesData, updateStations };
