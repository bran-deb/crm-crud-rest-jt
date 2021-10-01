
(function () {
    const formulario = document.querySelector('#formulario')
    formulario.addEventListener('submit', validarCliente)

    function validarCliente(e) {
        e.preventDefault()

        const nombre = document.querySelector('#nombre').value
        const email = document.querySelector('#email').value
        const telefono = document.querySelector('#telefono').value
        const empresa = document.querySelector('#empresa').value

        const cliente = { nombre, email, telefono, empresa }

        !validar(cliente)
            ? console.log('todos los espacios son obligatorios')
            : console.log('correcto')
    }
    //metodo para validar
    const validar = obj => Object.values(obj).every(input => input != '')




})()

