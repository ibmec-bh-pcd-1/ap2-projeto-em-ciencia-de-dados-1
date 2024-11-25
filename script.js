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
}

// Função principal para adicionar eventos (executada no navegador)
function initApp() {
  // SEU CÓDIGO AQUI
  let select = document.getElementById("line-selector")
  let container=document.getElementById("stations-container")
  let mensagem=document.getElementById("mensagem")
  // Paragrafo para cada mensagem
  let info1 = document.createElement("p")
  let info2 = document.createElement("p")
  let info3 = document.createElement("p")
  //pegando todos os paragrafos para analisar o status da linha
  let status = document.getElementsByTagName("p")
  document.addEventListener("change",function(){
    if(select.value=="azul"){
      mensagem.style.display= "none"
      info1.innerHTML="Estação Central - Normal"
      info2.innerHTML="Estação Sul - Manutenção"
      info3.innerHTML="Estação Norte - Inoperante"
      //colocando a classe com base no status
      info1.setAttribute("class","normal")
      info2.setAttribute("class","manutenção")
      info3.setAttribute("class","inoperante")
      container.appendChild(info1)
      container.appendChild(info2)
      container.appendChild(info3)
    }
    else if(select.value=="rosa"){
      mensagem.style.display= "none"
      info1.innerHTML="Estação Jardim - Normal"
      info2.innerHTML="Estação Flor - Normal"
      info3.innerHTML="Estação Bela Vista - Manutenção"
      info1.setAttribute("class","normal")
      info2.setAttribute("class","normal")
      info3.setAttribute("class","manutenção")
      container.appendChild(info1)
      container.appendChild(info2)
      container.appendChild(info3)
    }
    else if(select.value=="lilas"){
      mensagem.style.display= "none"
      info1.innerHTML="Estação Aurora - Normal"
      info2.innerHTML="Estação Cristal - Inoperante"
      info3.innerHTML="Estação Pérola - Manutenção"
      info1.setAttribute("class","normal")
      info2.setAttribute("class","inoperante")
      info3.setAttribute("class","manutenção")
      container.appendChild(info1)
      container.appendChild(info2)
      container.appendChild(info3)
    }else{
      mensagem.style.display="block"
      container.removeChild(info1)
      container.removeChild(info2)
      container.removeChild(info3)
      //removendo as mensagens adicionadas previamente
    }
  })
}

// Garantir que a função principal seja chamada apenas no navegador
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}

// Exportar dados e função para testes
module.exports = { linesData, updateStations };
