const botaoprojetosfuturos = document.querySelector('.btn-projetos-futuros');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoprojetosfuturos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoprojetosfuturos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
