// Este console.log serve para confirmar que o custom.js está sendo carregado.
// Abra as Ferramentas do Desenvolvedor (F12) na aba "Console" para ver esta mensagem.
console.log("custom.js carregado e pronto para a ação!");

// --- Exemplo de Efeito: Botão "Voltar ao Topo" ---
// O PaperMod já carrega o jQuery, então podemos usá-lo.

$(document).ready(function() {
    // Crie um elemento para o botão no seu layouts/partials/extended_footer.html
    // Exemplo de HTML para o botão (adicione no seu extended_footer.html ANTES do script custom.js):
    // <button id="back-to-top-btn" style="display:none; position: fixed; bottom: 20px; right: 20px; background-color: var(--primary-color, #00bcd4); color: white; border: none; border-radius: 50%; width: 50px; height: 50px; font-size: 24px; cursor: pointer; z-index: 1000; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">↑</button>
    // A cor de fundo 'var(--primary-color, #00bcd4)' tenta usar uma variável CSS do PaperMod, caso exista.

    var btn = $('#back-to-top-btn');

    // Mostra ou esconde o botão ao rolar a página
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) { // O botão aparece após rolar 300px
            btn.fadeIn(); // Efeito de aparecer suave
        } else {
            btn.fadeOut(); // Efeito de desaparecer suave
        }
    });

    // Rola a página para o topo ao clicar no botão
    btn.on('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link/botão
        $('html, body').animate({scrollTop:0}, '300'); // Animação de scroll suave para o topo
    });
});

// --- Exemplo de Interatividade: Mensagem ao Clicar em Título de Post ---
// Isso é apenas um exemplo. Você pode adaptar para outras interações.

/*
$('.post-content h1, .post-content h2, .post-content h3').on('click', function() {
    alert("Você clicou em um título! Que legal!");
});
*/

// --- Exemplo de Animação CSS Adicional via JS ---
// Se você tiver elementos com classes específicas que quer animar via JS após o DOM estar pronto.

/*
$('.some-element-class').addClass('animated fadeIn'); // Se você usar uma biblioteca como Animate.css
*/