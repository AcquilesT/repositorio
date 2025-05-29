let currentGroup = 1; // 1 para caixas 1,2,3; 2 para caixas 4,5,6
const boxGroups = document.querySelectorAll('.box-group');

function changeBoxes(direction) {
    // Remove a classe 'active' do grupo atual
    boxGroups[currentGroup - 1].classList.remove('active');

    // Troca o grupo
    currentGroup = currentGroup === 1 ? 2 : 1;

    // Adiciona a classe 'active' ao novo grupo
    boxGroups[currentGroup - 1].classList.add('active');

    // Log para depuração
    console.log(`Grupo atual: ${currentGroup}`);
}

// Inicializa com o grupo 1 visível (já definido no HTML)