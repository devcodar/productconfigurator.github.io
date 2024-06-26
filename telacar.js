document.getElementById('btnTelaCheia').addEventListener('click', function() {
    const modelo3D = document.getElementById('modelo2D');
  
    // Função para esconder ou mostrar todos os elementos exceto o modelo3D
    function ajustarVisibilidadeElementos(esconder) {
      document.querySelectorAll('#conteudo > *:not(model-viewer)').forEach(el => {
        el.style.display = esconder ? 'none' : '';
      });
    }
  
    // Aciona a tela cheia e esconde os outros elementos
    if (modelo3D.requestFullscreen) {
      ajustarVisibilidadeElementos(true);
      modelo3D.requestFullscreen();
    } else if (modelo3D.webkitRequestFullscreen) { // Safari
      ajustarVisibilidadeElementos(true);
      modelo3D.webkitRequestFullscreen();
    } else if (modelo3D.msRequestFullscreen) { // IE11
      ajustarVisibilidadeElementos(true);
      modelo3D.msRequestFullscreen();
    }
  
    // Listener para detectar a saída do modo tela cheia
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        ajustarVisibilidadeElementos(true); // Mostra os elementos novamente
      }
    });
  });
  