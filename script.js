const typed = new Typed('#typed-text', {
    strings: ["Compras acima de R$ 399,00 com frete grátis.", "Ganhe 10% de Giftback."],
    typeSpeed: 50, // Velocidade que será digitado o texto
    backSpeed: 25, // Velocidade de retorno do texto
    loop: true, // Faz com que o texto fique em execução infinita
    showCursor: false, // Estamos removendo o cursor padrão do HMTL
    fadeOut: true, // Adiciana uma transição (opcional)
});

// Seleciona o elemento que contém todas as imagens do carrossel
const track = document.getElementById('carouselTrack');

// Obtém o número de imagens no carrossel
const items = document.querySelectorAll('.carousel-item');
let index = 0; // Índice que rastreia a imagem atual

// Função que move o carrossel para a próxima imagem
function moveCarousel() {
    // Incrementa o índice para avançar a imagem
    index++;

    // Verifica se o índice chegou á ultima imagem clonada
    if (index >= items.length - 1) {
        // Pequeno atraso para permitir que a transição termine
        setTimeout(() => {
            track.style.transtion = 'none;' // Remove a animação
            index = 0; // Volta ao início (primeira imagem)
        track.style.transform = `translateX(0)`; // Move para a primeira imagem
        }, 500); //Tempo suficiente para completar a transição visível

        
    } else {
        // Move o carrossel para a próxima imagem
        track.style.transition = 'transform 0.8s ease'; // Adiciona a animação
        track.style.transform = `translateX(-${index * 100}%)`; //Desloca o carrossel
    }
}

// Define um intervalo para mover o carrosel automaticamente a cada 3 segundos
setInterval(moveCarousel, 2000);