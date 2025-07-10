# 🎮 Game Sage AI

![Badge de Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Tecnologias Utilizadas](https://img.shields.io/badge/Tecnologias-HTML%2FCSS%2FJS-blueviolet)
[![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📄 Descrição do Projeto

O **Game Sage AI** é um projeto interativo desenvolvido durante a **NLW Expert (NLW #20) da Rocketseat**. Ele foi criado para ser uma ferramenta útil para entusiastas de jogos.

O site permite que os usuários:
* **Selecionem um jogo** de uma lista predefinida.
* **Insiram sua própria API Key da Google Gemini** diretamente no código-fonte para testes locais.
* **Façam perguntas específicas** sobre o jogo selecionado.

Em tempo real, a inteligência artificial da **Gemini API** processa a pergunta e fornece informações, dicas, builds e estratégias atualizadas sobre o tema solicitado.

---

## ✨ Funcionalidades

* **Seleção de Jogo:** Escolha o jogo de interesse para direcionar as perguntas e obter respostas mais relevantes.
* **Integração com Gemini API:** Utilize sua chave pessoal da Gemini API para alimentar o modelo de IA.
* **Perguntas Dinâmicas:** Faça qualquer pergunta sobre o jogo selecionado, desde builds de personagens e estratégias de meta até dicas de gameplay.
* **Respostas Inteligentes:** Receba informações precisas e relevantes, formatadas de forma clara para fácil leitura.
* **Interface Simples e Intuitiva:** Um design limpo e funcional, focado em uma experiência de usuário descomplicada.

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Para a estruturação semântica da página web.
* **CSS3:** Para estilização moderna e responsiva da interface do usuário.
* **JavaScript:** Responsável pela lógica de front-end, manipulação do DOM e a integração com a API externa.
* **Google Gemini API (Generative Language API):** O motor de inteligência artificial que processa as perguntas e gera as respostas dinâmicas.

---

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o Game Sage AI em sua máquina local:

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/RafaelSouzza/game-sage-ai.git
    cd game-sage-ai
    ```

2.  **Obtenha sua Gemini API Key:**
    * Acesse o [Google AI Studio](https://aistudio.google.com/app/apikey).
    * Crie ou selecione um projeto e gere sua chave de API.

3.  **Insira sua API Key no `script.js`:**
    * Abra o arquivo `script.js` na pasta clonada.
    * Localize a linha que define a `apiKeyInput` (ou similar) e **substitua `"SUA_CHAVE_AQUI"`** pela sua chave de API da Gemini.

    ```javascript
    // Exemplo:
    const apiKeyInput = "SUA_CHAVE_AQUI"; // <-- Substitua AQUI pela sua chave REAL
    ```
    ⚠️ **ATENÇÃO:** Essa abordagem é para **facilitar testes e uso local**. **NUNCA** faça commit da sua chave de API diretamente no código para um repositório público como o GitHub. Chaves expostas podem ser usadas indevidamente. Para um projeto em produção, use variáveis de ambiente ou métodos mais seguros para gerenciar chaves.

4.  **Execute o Projeto:**
    * Após clonar e inserir sua API Key no `script.js`, basta **abrir o arquivo `index.html`** no seu navegador web preferido. Este projeto é puramente front-end e não requer um servidor local.
