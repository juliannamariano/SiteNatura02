function showSection(sectionId) {
    document.querySelectorAll('.goal-section').forEach(section => {
        section.classList.remove('active');
    });

    
    document.getElementById(sectionId).classList.add('active');

    
    document.querySelectorAll('.goal-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
    showSection('vendas');
});

function searchTable() {
    const input = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        const name = row.querySelectorAll("td")[1].textContent.toLowerCase();
        if (name.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}



document.addEventListener('DOMContentLoaded', function () {
    const redeemButtons = document.querySelectorAll('.redeem-btn');
    const pointsDisplay = document.querySelector('.greeting strong'); // Exibe os pontos do usuário
    const modal = document.getElementById('modal'); // Obtém o modal
    const modalMessage = document.getElementById('modal-message'); // Mensagem do modal
    const closeModal = document.querySelector('.close'); // Botão de fechar o modal

    // Pontuação inicial fixa (sempre volta para 100 quando a página recarrega)
    let initialPoints = 100; 
    let userPoints = initialPoints; // Pontuação atual, reiniciada a cada carregamento da página

    // Atualiza a exibição dos pontos na interface
    pointsDisplay.textContent = `${userPoints} pontos`;

    redeemButtons.forEach(button => {
        // Pega o valor de pontos necessários para resgatar cada oferta
        const pointsRequired = parseInt(button.getAttribute('data-points'));
        const offerName = button.previousElementSibling.previousElementSibling.textContent.trim(); // Nome da oferta

        // Reseta os botões e ofertas a cada carregamento da página
        button.disabled = false; // Habilita o botão novamente
        button.textContent = 'Resgatar'; // Redefine o texto do botão

        // Adiciona o evento de clique para cada botão de resgatar
        button.addEventListener('click', function () {
            if (userPoints >= pointsRequired) {
                // Diminui os pontos do usuário temporariamente
                userPoints -= pointsRequired;
                pointsDisplay.textContent = `${userPoints} pontos`; // Atualiza a exibição dos pontos

                // Desativa o botão após resgatar a oferta
                button.disabled = true;
                button.textContent = 'Resgatado'; // Altera o texto do botão

                // Exibe a mensagem no modal
                modalMessage.textContent = 'Você resgatou a oferta: ' + offerName;
                modal.style.display = "block"; // Exibe o modal
            } else {
                // Exibe a mensagem de erro no modal
                modalMessage.textContent = 'Você não tem pontos suficientes para resgatar essa oferta.';
                modal.style.display = "block"; // Exibe o modal
            }
        });
    });

    // Fecha o modal quando o usuário clica no "x"
    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    // Fecha o modal quando o usuário clica fora do modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});






