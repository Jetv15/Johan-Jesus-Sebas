function mostrarContenido(seccionId) {
    document.querySelectorAll('.contenido-seccion').forEach(seccion => {
        seccion.style.display = 'none';
    });
    document.getElementById(seccionId).style.display = 'block';
    document.querySelectorAll('.sub-content').forEach(sub => {
        sub.style.display = 'none';
    });
}

function mostrarSubContenido(subId) {
    document.querySelectorAll('.sub-content').forEach(sub => {
        sub.style.display = 'none';
    });
    document.getElementById(subId).style.display = 'block';
}

// Mostrar la primera sección por defecto
mostrarContenido('biologicos');