function mostrarContenido(id) {
    // Ocultar todas las secciones de contenido
    const secciones = document.querySelectorAll('.contenido-seccion');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    // Mostrar la sección correspondiente al botón clicado
    const seccionSeleccionada = document.getElementById(id);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';
    }
}
