// Função para exibir o parágrafo ao passar o mouse sobre o h2
function exibirParagrafo(idParagrafo) {
  var paragrafo = document.getElementById(idParagrafo);
  paragrafo.classList.add("visivel"); // Adiciona a classe para mostrar o parágrafo
}

// Função para ocultar o parágrafo ao retirar o mouse do h2
function ocultarParagrafo(idParagrafo) {
  var paragrafo = document.getElementById(idParagrafo);
  paragrafo.classList.remove("visivel"); // Remove a classe para ocultar o parágrafo
}

// Função para exibir o parágrafo ao passar o mouse sobre o h2
function exibirParagrafo(idParagrafo) {
  var paragrafo = document.getElementById(idParagrafo);
  paragrafo.classList.add("visivel"); // Adiciona a classe para mostrar o parágrafo
}

// Função para ocultar o parágrafo ao retirar o mouse do h2
function ocultarParagrafo(idParagrafo) {
  var paragrafo = document.getElementById(idParagrafo);
  paragrafo.classList.remove("visivel"); // Remove a classe para ocultar o parágrafo
}

// Função para exibir o parágrafo ao passar o mouse sobre o h2
function exibirParagrafo(idParagrafo) {
    var paragrafo = document.getElementById(idParagrafo);
    paragrafo.classList.add("visivel"); // Adiciona a classe para mostrar o parágrafo
    paragrafo.parentElement.nextElementSibling.classList.add("visivel"); // Exibe a borda animada
}

// Função para manter o parágrafo visível enquanto o mouse estiver sobre ele
function manterVisivel(idParagrafo) {
    var paragrafo = document.getElementById(idParagrafo);
    paragrafo.classList.add("visivel"); // Adiciona a classe para manter o parágrafo visível
    paragrafo.parentElement.nextElementSibling.classList.add("visivel"); // Exibe a borda animada
}

// Função para ocultar o parágrafo ao retirar o mouse do h2
function ocultarParagrafo(idParagrafo) {
    var paragrafo = document.getElementById(idParagrafo);
    if (!paragrafo.matches(":hover")) {
        paragrafo.classList.remove("visivel"); // Remove a classe para ocultar o parágrafo se não estiver com o mouse sobre ele
        paragrafo.parentElement.nextElementSibling.classList.remove("visivel"); // Oculta a borda animada
    }
}

// Event listener para manter o parágrafo visível enquanto o mouse estiver sobre ele
document.querySelectorAll('.paragrafo').forEach(item => {
    item.addEventListener('mouseover', event => {
        manterVisivel(event.target.id);
    });
});

