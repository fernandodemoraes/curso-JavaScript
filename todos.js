var listaElementos = document.querySelector('#app-list tbody');
var inputElemento  = document.querySelector('#app input');
var botaoElemento  = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('lista-todos')) || [];

/**
 * Adiciona o todo
 */
function addTodo() {
    var todoTexto = inputElemento.value;

    // não adiciona caso não tenha nada no input
    if (todoTexto.length === 0) {
        return;
    }

    todos.push(todoTexto);
    inputElemento.value = '';

    renderTodos();
    salvarNoStorage();
}

botaoElemento.onclick = addTodo;

/**
 * Renderiza os todos
 */
function renderTodos() {
    listaElementos.innerHTML = '';

    for(todo of todos) {
        // tr
        var trElemento = document.createElement('tr');

        // td
        var tdElemento = document.createElement('td');
        trElemento.appendChild(tdElemento);
        tdElemento.appendChild(document.createTextNode(todo));
        
        // td ação
        var tdElementoAcao = document.createElement('td');

        // link de exclusão
        var linkElemento   = document.createElement('a');
        linkElemento.setAttribute('href', '#');
        linkElemento.setAttribute('class', 'btn btn-danger btn-sm active');

        // ícone de deletar
        var iconeDeletar = document.createElement('i'); 
        iconeDeletar.setAttribute('class', 'fas fa-trash-alt');

        tdElementoAcao.appendChild(linkElemento);
        trElemento.appendChild(tdElementoAcao);

        // posição no array
        var posicao = todos.indexOf(todo);
        linkElemento.setAttribute('onclick', 'deletarTodo(' + posicao + ')')

        // inicia a lista
        listaElementos.appendChild(trElemento);
        linkElemento.appendChild(iconeDeletar);
    }
}

renderTodos();

/**
 * Deleta o todo
 * 
 * @param {*} posicao 
 */
function deletarTodo(posicao) {
    todos.splice(posicao, 1);
    
    renderTodos();
    salvarNoStorage();
}

/**
 * Salva no local storage
 */
function salvarNoStorage() {
    localStorage.setItem('lista-todos', JSON.stringify(todos));
}