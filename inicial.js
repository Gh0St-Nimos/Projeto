// Função para alternar o tema
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    // Alterna entre modo claro e escuro
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Trocar ícone com base no tema
    if (body.classList.contains('dark-mode')) {
        themeIcon.src = 'C:\\Users\\Desktop\\Downloads\\Night_Mode_free_icons_designed_by_Aldo_Cervantes-removebg-preview.png'; // Ícone da lua
    } else {
        themeIcon.src = 'C:\\Users\\Desktop\\Downloads\\Sun_free_vector_icons_designed_by_Freepik-removebg-preview.png'; // Ícone do sol
    }
}
