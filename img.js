  const ativarSkybox = document.getElementById('ativarSkybox').addEventListener('click', function() {
  const modelo2D = document.getElementById('#modelo2D');
  const caminhoImagemHDRPrincipal = 'rosendal_plains_2_2k.hdr';
  const caminhoImagemHDRSecundario = 'kloppenheim_02_4k.hdr';
  const skyboxAtivo = modelo3D.getAttribute('skybox-image');
  
  // Alterna entre o HDR principal e o secundário
  if (skyboxAtivo === caminhoImagemHDRSecundario) {
    modelo2D.setAttribute('skybox-image', caminhoImagemHDRPrincipal);
    modelo2D.setAttribute('environment-image', caminhoImagemHDRPrincipal);
  } else {
    modelo2D.setAttribute('skybox-image', caminhoImagemHDRSecundario);
    modelo2D.setAttribute('environment-image', caminhoImagemHDRSecundario);
  }
  modelo2D.setAttribute('shadow-intensity','0');
  modelo2D.setAttribute('shadow-softness', '5');
  modelo2D.setAttribute('skybox-height', '2rem');
  modelo2D.setAttribute('exposure','2');

  // Esconde o botão e exibe o modelo 3D
  document.body.style.display = 'flex';
  document.body.style.height = '100vh';
  document.body.style.width = '100%';
  document.body.style.alignItems = 'center';
  document.body.style.justifyContent = 'center';
});
  



  
  
  
 

