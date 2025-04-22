import { createProjects, createTodos } from "./base";

function initialiseButtons() {
    document.querySelector('#makeTodo').addEventListener('click', ()=>{
        document.querySelector('.newTodo').showModal();
    });
    document.querySelector('#createTodo').addEventListener('click', ()=>{
        makeTodo();
        document.querySelector('.newTodo').close();
    });
    document.querySelector('#cancelTodo').addEventListener('click', ()=>{
        document.querySelector('.newTodo').close();
    });
    document.querySelector('#makeProject').addEventListener('click', ()=>{
        document.querySelector('.newProject').showModal();
    });
    document.querySelector('#createProject').addEventListener('click', ()=>{
        makeProject();
        document.querySelector('.newProject').close();
    });
    document.querySelector('#cancelProject').addEventListener('click', ()=>{
        document.querySelector('.newProject').close();
    });
}

function makeProject() {
    let title = document.querySelector('#newProject').value;
    let priority = document.querySelector('#projectPriority').value * 1;
    let description = document.querySelector('#projectDescription').value;
    let due = document.querySelector('#projectDate').value;
    let data = {
        name: title,
        priority: priority,
        list: [],
        description: description,
        due: due,
        done: false
    };
    createProjects(data);
}
function makeTodo() {
    let title = document.querySelector('#newTask').value;
    let priority = document.querySelector('#todoPriority').value * 1;
    let description = document.querySelector('#todoDescription').value;
    let due = document.querySelector('#todoDate').value;
    let data = {
        task: title,
        priority: priority,
        description: description,
        due: due,
        done: false
    };
    createTodos(data);
}


export {initialiseButtons};