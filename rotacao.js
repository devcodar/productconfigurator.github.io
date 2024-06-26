document.getElementById('botaoRotacao').addEventListener('click', function() {
  const modelViewer = document.getElementById('modelo2D');

  // Verifica se o auto-rotate já está ativado
  if (modelViewer.hasAttribute('auto-rotate')) {
      // Se estiver, desativa e muda para a imagem original
      modelViewer.removeAttribute('auto-rotate');
      this.classList.remove('botao-rotacao-ativo');
      this.classList.add('botao-rotacao');
  } else {
      // Se não, ativa e muda para a imagem de hover
      modelViewer.setAttribute('auto-rotate', '');
      this.classList.add('botao-rotacao-ativo');
      this.classList.remove('botao-rotacao');
  }
});
