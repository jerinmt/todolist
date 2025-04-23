import { Todos } from "./todos.js";
import { Projects } from "./projects.js";
import {createProjects, deleteProjects, createTodos, deleteTodos, centralObject} from "./base.js";
import { addProjectDom } from "./projectsUI.js";
import {initialiseButtons, makeProject, makeTodo} from "./baseUI.js";


function addTodosDom(item, project) {
    centralObject.current = null;
    let container;
    if(project==null) {
        container = document.querySelector('.independent');
    }
    else {
        let requiredProject = document.querySelectorAll('.projects');
        for(let i=0;i<requiredProject.length;i++) {
            let identity = requiredProject[i].dataset.uniqueID;
            if(identity==project) {
                container = requiredProject[i].querySelector('.tasks');
            }
        }
    }
    let prioritySet;
    if(item.done===true) {
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
    let edit1 = document.createElement('button');
    let edit2 = document.createElement('button');
    let description = document.createElement('p');
    task.textContent = item.task;
    deadLine.textContent = item.due;
    if(item.done) {
        toggle.textContent = 'Not done';
    }    
    else {
        toggle.textContent = 'Done';
    }
    toggle.addEventListener('click',(Event)=>{
        let parent = Event.target.parentNode;
        item.done = !item.done;
        parent.remove();
        addTodosDom(item, project);
    });
    edit1.textContent = 'Priority +';
    edit1.addEventListener('click',(Event)=>{
        let parent = Event.target.parentNode;
        if((item.priority==1)||(item.priority==2)) {
            item.priority++;
        }
        parent.remove();
        addTodosDom(item, project);
    });
    edit2.textContent = 'Priority -';
    edit2.addEventListener('click',(Event)=>{
        let parent = Event.target.parentNode;
        if((item.priority==3)||(item.priority==2)) {
            item.priority--;
        }
        parent.remove();
        addTodosDom(item, project);
    });
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
    card.appendChild(toggle);
    card.appendChild(deleteThis);
    card.appendChild(edit1);
    card.appendChild(edit2);
    
}

export {addTodosDom};