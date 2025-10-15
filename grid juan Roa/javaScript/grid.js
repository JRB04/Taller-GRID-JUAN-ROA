// ...existing code...

function showSection(selector) {
    // Todas las secciones que quieres alternar
    const sections = document.querySelectorAll('.full_bleed, .gallery, .content-container');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    const selected = document.querySelector(selector);
    if (selected) {
        selected.style.display = '';
    }
}

// Mostrar solo la primera sección al cargar
window.addEventListener('DOMContentLoaded', () => {
    showSection('.full_bleed');
});