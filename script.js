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
    const valorSelecionado = selectedLine.value;
    if(valorSelecionado == ""){
        return    
    }else if(valorSelecionado == "azul"){
        document.stationsContainer.createElement = "p"
        stationsContainer.textContent = azul.value;
        p.appendChild(stationsContainer)
        if(status == "Normal"){
            p.classList = "normal"
        }else if(status == "Manutenção"){
            p.classList = "manutenção"
        }else{
            p.classList = "inoperante"
        }
        
    }else if (valorSelecionado == "rosa"){
        document.stationsContainer.createElement = "p"
        stationsContainer.textContent = rosa.value;
        p.appendChild(stationsContainer)
        if(status == "Normal"){
            p.classList = "normal"
        }else if(status == "Manutenção"){
            p.classList = "manutenção"
        }else{
            p.classList = "inoperante"
        }
        
    }else{
        document.stationsContainer.createElement = "p"
        stationsContainer.textContent = lilas.value;
        p.appendChild(stationsContainer)
        if(status == "Normal"){
            p.classList = "normal"
        }else if(status == "Manutenção"){
            p.classList = "manutenção"
        }else{
            p.classList = "inoperante"
        }
        
    }
  }
  
  // Função principal para adicionar eventos (executada no navegador)
  function initApp() {
    // SEU CÓDIGO AQUI
    const selectedLine = document.getElementById("line-selector");
    const stationsContainer = document.getElementById("stations-container");
    selectedLine.addEventListener("change", updateStations(selectedLine,stationsContainer))
  }
  
  // Garantir que a função principal seja chamada apenas no navegador
  if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", initApp);
  }
  
  // Exportar dados e função para testes
  module.exports = { linesData, updateStations };