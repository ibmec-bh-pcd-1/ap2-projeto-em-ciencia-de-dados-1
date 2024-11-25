document.getElementById('line-selector').addEventListener('change', function() {
  const line = this.value;
  const stationsContainer = document.getElementById('stations-container');
  
  stationsContainer.innerHTML = '';

  if (line === '') {

      stationsContainer.innerHTML = 'Selecione uma linha para visualizar as estações.';
  } else {
      let stations = [];
      
      if (line === 'azul') {
          stations = [
              { name: 'Estação Central- Normal', status: 'normal' },
              { name: 'Estação Sul- Manutenção', status: 'manutencao' },
              { name: 'Estação Norte- Inoperante ', status: 'inoperante' }
          ];
      } else if (line === 'rosa') {
          stations = [
              { name: 'Estação Jardim- Normal', status: 'normal' },
              { name: 'Estação Flor- Normal ', status: 'normal' },
              { name: 'Estação Bela Vista- Manutenção', status: 'manutencao' }
          ];
      } else if (line === 'lilas') {
          stations = [
              { name: 'Estação Aurora- Normal', status: 'normal' },
              { name: 'Estação Cristal- Inoperante ', status: 'inoperante' },
              { name: 'Estação Pérola- Manutenção ', status: 'manutencao' }
          ];
      }
    
      stations.forEach(station => {
          const p = document.createElement('p');
          p.textContent = station.name;
          p.classList.add(station.status); 
          stationsContainer.appendChild(p);
      });
  }
});
