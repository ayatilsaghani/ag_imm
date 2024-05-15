document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelector('.container a');
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Lien cliqué ! Ajouter ici votre logique pour ouvrir un détail ou une action spécifique.');
    });
});
