document.addEventListener('DOMContentLoaded', function() {
    const modelo2D = document.getElementById('modelo2D');
    const abrirAR = document.getElementById('abrirAR');
  
    abrirAR.addEventListener('click', function() {
      if (modelo3D && modelo3D.activateAR) {
        modelo3D.activateAR();
      } else {
        console.error('A função activateAR não está disponível no elemento model-viewer.');
      }
    });
  });
  