var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = [
    'fazer cafe',
    'estudar js',
    'acessar @'
];

function renderApp() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteApp('+pos+')')

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
renderApp();

function addApp() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value='';
    renderApp();
}

buttonElement.onclick = addApp;


function deleteApp(pos) {
    todos.splice(pos, 1);
    renderApp;
}
