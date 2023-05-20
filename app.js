let todos = ["Pako", "Nielien", "Niel", "Paks"];

todos.forEach( function(todos){
    let element = document.createElement('div');
    element.innerText = todos;
    document.body.appendChild(element);
});

function addTitle(){
    let todoInput = document.getElementById('todoTitle');
    let todoValue = todoInput.value;
    todos.push(todoValue)
    let elements = document.createElement('div');
    elements.innerText = todoValue;
    document.body.appendChild(elements);
}
function changeTitle(){
    let change = document.getElementById('todoTitle').value;
    document.getElementById('button').innerText = change;
}