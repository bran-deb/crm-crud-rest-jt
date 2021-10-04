import { obtenerCliente, editarCliente } from './API.js'
import { mostrarAlerta, validar } from './funciones.js'

(function () {

    //campos del formulario
    const nombreInput = document.querySelector('#nombre')
    const empresaInput = document.querySelector('#empresa')
    const emailInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono')
    const idInput = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search)

        const idCliente = parseInt(parametrosURL.get('id'))
        const cliente = await obtenerCliente(idCliente)
        mostrarCliente(cliente)

        //submit al formulario
        const formulario = document.querySelector('#formulario')
        formulario.addEventListener('submit', validarCliente)
    })

    function mostrarCliente(cliente) {
        const { nombre, empresa, email, telefono, id } = cliente
        nombreInput.value = nombre
        empresaInput.value = empresa
        emailInput.value = email
        telefonoInput.value = telefono
        idInput.value = id
    }

    function validarCliente(e) {
        e.preventDefault()

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: emailInput.value,
            id: parseInt(idInput.value)
        }
        !validar(cliente)
            ? mostrarAlerta('todos los espacios son obligatorios')
            : null

        //rescribe el obteto
        editarCliente(cliente)
    }

})()