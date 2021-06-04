let submitButton = document.getElementById('submit');
let todoList = document.getElementById('todoList');

submitButton.addEventListener('click', function(e) {
    let form = document.getElementById('taskSubmit');

    let addRow = todoList.insertRow();
    let addCellPriority = addRow.insertCell();
    addCellPriority.innerHTML = form.elements['priority'].value;
    let addCellDueDate = addRow.insertCell();
    addCellDueDate.innerHTML = form.elements['duedate'].value;
    let addCellToDo = addRow.insertCell();
    addCellToDo.innerHTML = form.elements['todo'].value;

})