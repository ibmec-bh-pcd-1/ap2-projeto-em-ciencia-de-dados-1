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

let linhaselecionada = document.getElementById('line-selector');
//Função para atualizar as estações no DOM
function updateStations(selectedLine, stationsContainer) {
  stationsContainer = document.getElementById("stations-container");
  selectedLine = linhaselecionada.value; //para pegar a linha escolhida
  let resultado = linesData[selectedLine]; //pegando qual a linha e seus objetos
  let show = document.createElement('p');
  show.innerHTML=resultado
  stationsContainer.appendChild(show)
  for(let y=0; y<3; y++){
    let objetos = document.createElement("p");
    objetos.innerHTML = linesData[resultado][y]; //para acessar os objetos 
    stationsContainer.appendChild(objetos)
    for (let i=0; i<2; i++){
      if (linesData[resultado][i]==="normal"){
        objetos.setAttribute("class", "normal");
      }
      else if (linesData[resultado][i]==="manutenção"){
        objetos.setAttribute("class", "manutenção");
      }
      else if(linesData[resultado][i]==="inoperante"){
        objetos.setAttribute("class", "inoperante");
      }
  }

  }
  }


// Função principal para adicionar eventos (executada no navegador)
function initApp() {
  // SEU CÓDIGO AQUI
  linhaselecionada.addEventListener("change", updateStations)
}

// Garantir que a função principal seja chamada apenas no navegador
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}

// Exportar dados e função para testes
module.exports = { linesData, updateStations }
