import {deleteProjects} from "./projects.js";
import {addTodosDom} from "./todosUI.js";
import {storeLS, centralObject} from "./data.js";


function addProjectDom(item) {
    let container;
    if(item.done===true) {
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
    let edit1 = document.createElement('button');
    let edit2 = document.createElement('button');
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
    toggle.addEventListener('click',(Event)=>{
        let parent = Event.target.parentNode;
        item.done = !item.done;
        storeLS();
        parent.remove();
        addProjectDom(item);
    });
    edit1.textContent = 'Priority +';
    edit1.addEventListener('click',(Event)=>{
        let parent = Event.target.parentNode;
        if((item.priority==1)||(item.priority==2)) {
            item.priority++;
        }
        storeLS();
        parent.remove();
        addProjectDom(item);
    });
    edit2.textContent = 'Priority -';
    edit2.addEventListener('click',(Event)=>{
        let parent = Event.target.parentNode;
        console.log(parent);
        if((item.priority==3)||(item.priority==2)) {
            item.priority--;
        }
        storeLS();
        parent.remove();
        addProjectDom(item);
    });
    deleteThis.textContent = 'Delete project';
    deleteThis.addEventListener('click',(Event)=>{
        deleteProjects(item.id);
        let entry = Event.target.parentNode;
        entry.remove();
    });
    addTask.textContent = 'Add a task';
    addTask.addEventListener('click', ()=>{
        centralObject.current = item.id;
        document.querySelector('.newTodo').showModal();
    });
    description.textContent = item.description;
    card.classList.add('projects');
    card.dataset.uniqueID = item.id;
    tasks.classList.add('tasks');
    set1.classList.add('highTodos');
    set2.classList.add('midTodos');
    set3.classList.add('lowTodos');
    set4.classList.add('doneTodos');
    container.appendChild(card);
    card.appendChild(title);
    card.appendChild(deadLine);
    card.appendChild(description);
    card.appendChild(toggle);
    card.appendChild(deleteThis);
    card.appendChild(edit1);
    card.appendChild(edit2);
    card.appendChild(addTask);
    card.appendChild(tasks);
    tasks.appendChild(set1);
    tasks.appendChild(set2);
    tasks.appendChild(set3);
    tasks.appendChild(set4);
    for(let i=0;i<item.list.length;i++) {
        addTodosDom(item.list[i], item.id);
    }    
    //create elements
    //append elements
}

export {addProjectDom};