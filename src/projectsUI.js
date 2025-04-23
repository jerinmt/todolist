import { Todos } from "./todos.js";
import { Projects } from "./projects.js";
import {createProjects, deleteProjects, createTodos, deleteTodos, currentProject} from "./base.js";
import { addTodosDom} from "./todosUI.js";
import {initialiseButtons, makeProject, makeTodo} from "./baseUI.js";


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
    card.appendChild(addTask);
    card.appendChild(description);
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

export {addProjectDom};