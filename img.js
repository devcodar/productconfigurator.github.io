document.getElementById('ativarSkybox').addEventListener('click', function() {
  const modelo3D = document.getElementById('modelo2D');
  const caminhoImagemHDRPrincipal = 'rosendal_plains_2_2k.hdr';
  const caminhoImagemHDRSecundario = 'kloppenheim_02_4k.hdr';
  const skyboxAtivo = modelo3D.getAttribute('skybox-image');
  
  // Alterna entre o HDR principal e o secundário
  if (skyboxAtivo === caminhoImagemHDRSecundario) {
    modelo3D.setAttribute('skybox-image', caminhoImagemHDRPrincipal);
    modelo3D.setAttribute('environment-image', caminhoImagemHDRPrincipal);
  } else {
    modelo3D.setAttribute('skybox-image', caminhoImagemHDRSecundario);
    modelo3D.setAttribute('environment-image', caminhoImagemHDRSecundario);
  }

  modelo3D.setAttribute('scale', '1.0 1.0 1.0 ');
  modelo3D.setAttribute('shadow-intensity', '5');
});
  

