const variantes = {
    varianteDefault: 'Default',
    varianteOrange: 'RED',
    varianteRed: 'BLUE',
    varianteBlue:'ORANGE',
    // Adicione mais variantes conforme necessário
};

// Certifique-se de que o model-viewer com ID "shoe" existe no seu HTML
const modelViewerVariants = document.querySelector("model-viewer#modelo2D");

Object.keys(variantes).forEach(id => {
    document.getElementById(id).addEventListener('click', function() {
        // Aqui, usamos a variável `varianteNome` para atribuir a variante correta
        const varianteNome = variantes[id];
        modelViewerVariants.variantName = varianteNome; // A linha corrigida
    });
});
