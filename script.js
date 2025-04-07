// Obtener los elementos
const documentContainer = document.getElementById('documentContainer');
const popup = document.getElementById('popup');

// Función para abrir el pop-up al pasar el ratón
documentContainer.addEventListener('mouseover', function() {
    popup.style.display = 'block'; // Mostrar el pop-up
});

// Función para cerrar el pop-up cuando el ratón sale
documentContainer.addEventListener('mouseout', function() {
    popup.style.display = 'none'; // Ocultar el pop-up
});

// Opcional: Cerrar el pop-up si el usuario hace clic fuera de él
popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
