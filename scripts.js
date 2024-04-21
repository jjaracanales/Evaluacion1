// Función para validar el formulario de contacto
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if(nombre === "" || email === "" || mensaje === "") {
        alert('Todos los campos son requeridos.');
        return false;
    }

    // Aquí puedes añadir más validaciones si lo deseas

    return true; // Si todo está correcto
}

// Añade el evento de 'submit' al formulario
document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.querySelector('form');
    formulario.onsubmit = validarFormulario;
});
