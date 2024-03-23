const personagensDaLista = document.querySelectorAll ('.personagem')
var audioTema = document.getElementById("audio-tema");
var audioSelecionarPersonagem = document.getElementById("audio-selecionar-personagem");

audioTema.addEventListener("ended", function(){
    audioTema.play()
})

personagensDaLista.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        alterarSelecao();
        personagem.classList.add('selecionado')
        alterarImagemPersonagemSelecionado(personagem)
        alterarNomePersonagemSelecionado(personagem);
        alterarDescricaoPersonagemSelecionado(personagem);
    })
});

function alterarSelecao() {
    const personagemSelecionadoLista = document.querySelector('.selecionado');
    personagemSelecionadoLista.classList.remove('selecionado');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const personagemSelecionadoInteiro = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    personagemSelecionadoInteiro.src = (`./src/img/card-${idPersonagem}.png`);
    audioSelecionarPersonagem.play()
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}