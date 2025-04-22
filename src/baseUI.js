import { deleteTodos, currentProject, deleteProjects} from "./base";

function addProjectDom(item) {
    let container;
    if(item.priority==0) {
        container = document.querySelector('.doneProjects');
    }
    else if(item.priority==1) {
        container = document.querySelector('.lowProjects');
    }
    else if(item.priority==2) {
        container = document.querySelector('.midProjects');
    }
    else if(item.priority==3) {
        container = document.querySelector('.highProjects');
    }
    let card = document.createElement('div');
    let title = document.createElement('h3');
    let deadLine = document.createElement('p');
    let toggle = document.createElement('button');
    let edit = document.createElement('button');
    let deleteThis = document.createElement('button');
    let description = document.createElement('p');
    let tasks = document.createElement('div');
    let set1 = document.createElement('div');
    let set2 = document.createElement('div');
    let set3 = document.createElement('div');
    let set4 = document.createElement('div');
    let addTask = document.createElement('button');
    title.textContent = item.name;
    deadLine.textContent = item.due;
    if(item.done) {
        toggle.textContent = 'Not completed';
    }    
    else {
        toggle.textContent = 'Completed';
    }
    edit.textContent = 'Edit project';
    deleteThis.textContent = 'Delete project';
    deleteThis.addEventListener('click',(Event)=>{
        deleteProjects(item.name);
        let entry = Event.target.parentNode;
        entry.remove();
    });
    addTask.textContent = 'Add a task';
    addTask.addEventListener('click', ()=>{
        currentProject.name = item.name;
        document.querySelector('.newTodo').showModal();
    });
    description.textContent = item.description;
    card.classList.add('projects');
    tasks.classList.add('tasks');
    set1.classList.add('highTodos');
    set2.classList.add('midTodos');
    set3.classList.add('lowTodos');
    set4.classList.add('doneTodos');
    container.appendChild(card);
    card.appendChild(title);
    card.appendChild(deadLine);
    card.appendChild(toggle);
    card.appendChild(edit);
    card.appendChild(deleteThis);
    card.appendChild(description);
    card.appendChild(addTask);
    card.appendChild(tasks);
    tasks.appendChild(set1);
    tasks.appendChild(set2);
    tasks.appendChild(set3);
    tasks.appendChild(set4);
    for(let i=0;i<item.list.length;i++) {
        addTodosDom(item.list[i], item.name);
    }    
    //create elements
    //append elements
}
//function removeProjectDom(itemName) {
    
//}
function addTodosDom(item, project) {
    currentProject.name = null;
    let container;
    if(project==null) {
        container = document.querySelector('.independent');
    }
    else {
        let requiredProject = document.querySelectorAll('.projects');
        for(let i=0;i<requiredProject.length;i++) {
            let title = requiredProject[i].querySelector('h3').textContent;
            if(title==project) {
                container = requiredProject[i].querySelector('.tasks');
            }
        }
    }
    let prioritySet;
    if(item.priority==0) {
        prioritySet = container.querySelector('.doneTodos');
    }
    else if(item.priority==1) {
        prioritySet = container.querySelector('.lowTodos');
    }
    else if(item.priority==2) {
        prioritySet = container.querySelector('.midTodos');
    }
    else if(item.priority==3) {
        prioritySet = container.querySelector('.highTodos');
    }
    let card = document.createElement('div');
    let task = document.createElement('p');
    let deadLine = document.createElement('p');
    let toggle = document.createElement('button');
    let deleteThis = document.createElement('button');
    let edit = document.createElement('button');
    let description = document.createElement('p');
    task.textContent = item.task;
    deadLine.textContent = item.due;
    if(item.done) {
        toggle.textContent = 'Not done';
    }    
    else {
        toggle.textContent = 'Done';
    }
    edit.textContent = 'Edit task';
    deleteThis.textContent = 'Delete task';
    deleteThis.addEventListener('click',(Event)=>{
        deleteTodos(item.id);
        let entry = Event.target.parentNode;
        entry.remove();
    });
    description.textContent = item.description;
    card.classList.add('todos');
    card.dataset.uniqueID = item.id;
    prioritySet.appendChild(card);
    card.appendChild(task);
    card.appendChild(deadLine);
    card.appendChild(description);
    card.appendChild(edit);
    card.appendChild(deleteThis);
    card.appendChild(toggle);
}

export {addProjectDom, addTodosDom}