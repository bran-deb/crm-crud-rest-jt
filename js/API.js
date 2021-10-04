const url = `http://localhost:4000/clientes`

//cuando se crea un nuevo cliente
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html'     //despues de crear un nuevo cliente vamos al index
    } catch (e) {
        console.log(e)
    }
}

//obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url)
        const clientes = await resultado.json()
        return clientes
    } catch (e) {
        console.log(e)
    }
}

//elimina un cliente
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {       //para delete se manda el id a eliminar junto al url
            method: 'DELETE'
        })

    } catch (e) {
        console.log(e)
    }
}