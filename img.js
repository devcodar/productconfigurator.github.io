document.getElementById('ativarSkybox').addEventListener('click', function() {
    const modelo3D = document.getElementById('modelo2D');
    const caminhoImagemHDR = 'satara_night_2k.hdr';
  
    // Ativa o skybox HDR
    modelo3D.setAttribute('skybox-image', caminhoImagemHDR);
    modelo3D.setAttribute('scale', '1.0 1.0 1.0 ');
    modelo3D.setAttribute ('environment-image', caminhoImagemHDR);

    // Opcional: Ative a sombra e a iluminação do modelo baseada no ambiente HDR
    modelo3D.setAttribute('shadow-intensity', '5');
  });
  

