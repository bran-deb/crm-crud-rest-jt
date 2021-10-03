const url = `http://localhost:4000/clientes`

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