const apiKeyInput = "SUA_CHAVE_AQUI"
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('form')

const markdownToHTML = (text) => {
    const converter = new showdown.Converter()
    return converter.makeHtml(text)
}

const perguntarIA = async (question, game, apiKey) => {
    const model = 'gemini-2.5-flash'
    const baseURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
    const pergunta = `
    ## Especialidade
    Você é um **consultor de meta e gameplay** para **${game}**. Sua expertise abrange tudo o que um jogador precisa saber para se destacar neste jogo, incluindo as últimas atualizações e tendências.

    ## Tarefa
    Fornecer respostas **objetivas e precisas** sobre ${game}, focando em estratégias, builds, desempenho de personagens/classes, e informações relevantes para o patch atual.

    ## Regras
    - Se a informação solicitada não estiver disponível ou não for aplicável ao patch atual, responda com: 'Não tenho informações sobre isso para o patch atual de ${game}.'
    - Para perguntas fora do escopo de ${game}, utilize: 'Esta pergunta não se refere a ${game}.'
    - A data de referência é ${new Date().toLocaleDateString()}. Todas as informações devem ser **as mais atualizadas possíveis** para ${game}.
    - Evite especulações ou informações não confirmadas. Apenas o que é factual e relevante para ${game}.
    - A adaptação da resposta deve ser intrínseca à natureza de ${game}. Por exemplo, para um MOBA, foque em sinergias e counters; para um FPS, em configurações e mapas.

    ## Formato da Resposta
    - **Máximo de 500 caracteres.** Seja direto.
    - Utilize **Markdown** para clareza.
    - Apenas a resposta, sem introdução ou encerramento.

    ## Exemplo de Resposta (varia com o jogo)
    Pergunta do usuário: Quais os melhores [armas/personagens/estratégias] para o início do jogo em ${game}?
    Resposta: No patch atual de ${game}, as [armas/personagens/estratégias] de destaque no início do jogo são:

    **Top 3 Opções:**
    1. [Opção 1 e breve motivo]
    2. [Opção 2 e breve motivo]
    3. [Opção 3 e breve motivo]

    **Dica:** [Uma dica rápida para o early game]

    ---
    Aqui está a pergunta do usuário: ${question}
    `
    const contents = [{
        role: "user",
        parts: [{
            text: pergunta
        }]
    }]

    const tools = [{
        google_search: {}
    }]

    // chamada API
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents,
            tools
        })
    })

    const data = await response.json()
    return data.candidates[0].content.parts[0].text
}

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const apiKey = apiKeyInput
    const game = gameSelect.value
    const question = questionInput.value

    if (apiKey == '' || game == '' || question == '') {
        alert('Por favor, preencha todos os campos')
        return
    }

    askButton.disabled = true
    askButton.textContent = 'Perguntando...'
    askButton.classList.add('loading')

    try {
        const text = await perguntarIA(question, game, apiKey)
        aiResponse.querySelector('.response-content').innerHTML = markdownToHTML(text)
        aiResponse.classList.remove('hidden')
    } catch (error) {
        console.log("Error: ", error)
    } finally {
        askButton.disabled = false
        askButton.textContent = 'Perguntar'
        askButton.classList.remove('loading')
    }
})