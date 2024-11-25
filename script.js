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
  let stationsContainer = document.createElement("stations-cointainer")
  let selectedLine = document.getElementById("line-selector").value

  if(selectedLine == Azul){
    for (let i=0; i<3; i++){
      let filho = document.createElement("p")
      filho.innerHTML = `${linesData[0].name}`
      stationsContainer.appendChild(filho)
      let none = document.getElementsByTagName("p")
      none.style.display = "none"
    }
  }
  else if(selectedLine == rosa){
    for (let i=0; i<3; i++){
      let filho = document.createElement("p")
      filho.innerHTML = `${linesData[1].name}`
      stationsContainer.appendChild(filho)
      let none = document.getElementsByTagName("p")
      none.style.display = "none"
    }
  }
  else if(selectedLine == lilas){
    for (let i=0; i<3; i++){
      let filho = document.createElement("p")
      filho.innerHTML = `${linesData[2].name}`
      stationsContainer.appendChild(filho)
      let none = document.getElementsByTagName("p")
      none.style.display = "none"
    }
  }
  else{
    let none = document.getElementsByTagName("p")
    none.style.display = "black"
  }
}

// Função principal para adicionar eventos (executada no navegador)
function initApp() {
  // SEU CÓDIGO AQUI
}

// Garantir que a função principal seja chamada apenas no navegador
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}

// Exportar dados e função para testes
module.exports = { linesData, updateStations };
