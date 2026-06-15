JavaScript
// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Responsivo (Hambúrguer)
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Alterna o ícone entre barras e 'X' ao clicar
        const icon = mobileMenu.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha o menu móvel ao clicar em qualquer link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 2. Validação e Envio do Formulário de Contato
    const formContato = document.getElementById('formContato');

    formContato.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede a página de recarregar
        
        // Captura os dados inseridos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação simples (o HTML já possui 'required', mas o JS garante o fluxo)
        if (nome && email && mensagem) {
            // Exibe mensagem de sucesso amigável
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre Medicina Veterinária foi enviada com sucesso.`);
            
            // Limpa o formulário após o envio
            formContato.reset();
        } else {
            alert('Por favor, preencha todos os campos do formulário.');
        }
    });
});
