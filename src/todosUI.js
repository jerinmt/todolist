import { Todos } from "./todos.js";
import { Projects } from "./projects.js";
import {createProjects, deleteProjects, createTodos, deleteTodos, currentProject} from "./base.js";
import { addProjectDom } from "./projectsUI.js";
import {initialiseButtons, makeProject, makeTodo} from "./baseUI.js";


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

export {addTodosDom};