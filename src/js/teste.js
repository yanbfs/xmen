/*
O que precisamos fazer?
Quando passar o mouse em cima do personagem mna lista temos que adicicionara 
borda azul de seleção na imagem pequena do personagem e mostar a imagem, o nome e o texto
grande do personagem que está selecionado.

Objetivo 01 - Quando passar o mouse em cima do personagem na listagem, demvemos selecionálo.
    passo 01 - pegar o personagem no JS pra poder verificar quando o usuário passar o mouse 
                em cima de um deles.
    passo 02 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
    passo 03 - verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele

Objetivo 02 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o 
              nome e a descrição do personagem grande
    passo 01 - pegar o elemento do personagem grande para adicionar as informaçãoes nele
    passo 02 - alterar a imagem do personagem grande
    passo 03 - alterar o nome do persoangem grande
    passo 04 - alterar a descrição do persoangem grande
*/

// Objetivo 01 - Quando passar o mouse em cima do personagem na listagem, demvemos selecionálo.
//     passo 01 - pegar o personagem no JS pra poder verificar quando o usuário passar o mouse 

const personagensDaLista = document.querySelectorAll ('.personagem')
console.log(personagensDaLista)

//passo 02 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagensDaLista.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behaavior: "smooth"})
        }

        // passo 03 - verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele
        const personagemSelecionadoLista = document.querySelector('.selecionado')
        personagemSelecionadoLista.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        /****************************/    
        //Objetivo 02 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        //passo 01 - pegar o elemento do personagem grande para adicionar as informaçãoes nele
        const personagemSelecionadoInteiro = document.querySelector('.personagem-grande')
        //passo 02 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value
        personagemSelecionadoInteiro.src = (`./src/img/card-${idPersonagem}.png`)

        //passo 03 - alterar o nome do persoangem grande
        const nomePersonagem = document.getElementById('nome-personagem')
        //console.log(nomePersonagem)
        nomePersonagem.innerText = personagem.getAttribute('data-name')

        //passo 04 - alterar a descrição do persoangem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem')
        //console.log(nomePersonagem)
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    })
});