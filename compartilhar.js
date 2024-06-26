function sharePage() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      }).then(() => {
        console.log('Obrigado por compartilhar!');
      }).catch(console.error);
    } else {
      // Fallback para navegadores que não suportam a Web Share API
      const textarea = document.createElement('textarea');
      textarea.value = window.location.href;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Link copiado para a área de transferência. Cole-o no seu mensageiro preferido.');
    }
  }
  
  // Adicionar um event listener para um botão ou elemento que chamará a função sharePage
  const shareButton = document.getElementById('share-button');
  if (shareButton) {
    shareButton.addEventListener('click', sharePage);
  }
  