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

        todoElement.appendChild(todoText);
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
