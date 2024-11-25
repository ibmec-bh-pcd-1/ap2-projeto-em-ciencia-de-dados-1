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
  let stationsContainer = document.getElementById("stations-container")
  let selectedLine = document.getElementById("line-selector").value
  if(selectedLine == "azul"){
    for (let i = 0; i<3; i++){
      let filho = document.createElement("p")
      filho.innerHTML = `${linesData[0][i]}`
      stationsContainer.appendchild(filho)
      let texto = document.getElementsByTagName("p")
      texto.style.display = "none"
    }
  }
  else if(selectedLine == "rosa"){
    for (let i = 0; i<3; i++){
      let filho = document.createElement("p")
      filho.innerHTML = `${linesData[1][i]}`
      stationsContainer.appendchild(filho)
      let texto = document.getElementsByTagName("p")
      texto.style.display = "none"
    }
  }
  else if(selectedLine == "lilas"){
    for (let i = 0; i<3; i++){
      let filho = document.createElement("p")
      filho.innerHTML = `${linesData[2][i]}`
      stationsContainer.appendchild(filho)
      let texto = document.getElementsByTagName("p")
      texto.style.display = "none"
    }
  }
  else{
    let texto = document.getElementsByTagName("p")
    texto.style.display = "block"
  }
}

// Função principal para adicionar eventos (executada no navegador)
function initApp() {
  updateStations()
  

}

// Garantir que a função principal seja chamada apenas no navegador
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}

// Exportar dados e função para testes
module.exports = { linesData, updateStations };
