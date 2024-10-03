document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    // Definir logins e senhas corretos (exemplo)
    const validCredentials = [
        { user: 'usuario123', password: 'senha123', redirectTo: 'consultora.html' },
        { user: 'admin123', password: 'admin123', redirectTo: 'lider.html' }
    ];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Captura os valores digitados
        const user = document.getElementById('codigo').value;
        const password = document.getElementById('senha').value;

        // Verificar se o usuário e senha estão corretos
        const validUser = validCredentials.find(cred => cred.user === user && cred.password === password);

        if (validUser) {
            // Redirecionar para a página específica com base no usuário
            window.location.href = validUser.redirectTo;
        } else {
            // Exibir mensagem de erro
            loginMessage.style.display = "block";
        }
    });
});

