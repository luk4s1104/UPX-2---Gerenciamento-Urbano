const formulario = document.getElementById('form')
const resposta = document.getElementById('resposta')

formulario.addEventListener('submit', async (event) => {
    event.preventDefault()
    const dadosDoFormulario = new FormData(formulario)
    const formJson = Object.fromEntries(dadosDoFormulario)
    const urlDoBackend = 'gdttftdtf'
    try{
        const repostaServidor = await fetch(urlDoBackend, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dadosDoFormulario)
        })

        const resultado = await respostaServidor.json()

        resposta.innerText = 'Dados enviados com sucesso'
        console.log(resultado)

    }catch(error){
        resposta.innerText = 'Erro ao conectar com o servidor'
        console.log(error)
    }

})
