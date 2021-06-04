let submitButton = document.getElementById('submit');
let todoList = document.getElementById('todoList');
function addTask(taskValues) {
    let newTaskRow = document.createElement('tr');

    taskValues.forEach((value) => { 
        newTaskRow.appendChild()
    })
    let newTaskPriority = document.createElement('td');
    newTaskPriority.innerHTML = priority;
    let newTaskDueDate = document.createElement('td');

}
submitButton.addEventListener('click', function(e) {
    let form = document.getElementById('taskSubmit');

    let addRow = todoList.insertRow();
    let addCellPriority = addRow.insertCell();
    addCellPriority.innerHTML = form.elements['priority'].value;
    let addCellDueDate = addRow.insertCell();
    addCellDueDate.innerHTML = form.elements['duedate'].value;
    let addCellToDo = addRow.insertCell();
    addCellToDo.innerHTML = form.elements['todo'].value;


    console.log('Hi');
})