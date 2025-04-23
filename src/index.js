import { Todos } from "./todos.js";
import { Projects } from "./projects.js";
import {createProjects, deleteProjects, createTodos, deleteTodos, currentProject} from "./base.js";
import { addTodosDom} from "./todosUI.js";
import { addProjectDom } from "./projectsUI.js";
import {initialiseButtons, makeProject, makeTodo} from "./baseUI.js";
import "./styles.css";

//create a todo
//create a project

initialiseButtons();









/*function retrieveFromLS() {
    //get the default list, add the info to indietodo and then create all other projects
    //display indietodo and other projects
} 
function makeTodo() {
    //get the values from form and create the object
    let item = getTodoDataUI();
    //if no project name is there call in default else check and call appropriate
    
}
function makeProject() {
    //get values
    let entry = getProjectDataUI();
    //show it in DOM according to priority
    createProjects(entry);
}

function storeLS() {
    //get all projects output
    //store in local storage
}*/

const todo1 = {
    task: 'do logic',
    priority: 2,
    project: 'default',
    description: 'complete the logic',
    due: '12/2/2024',
    done: false
};
const todo2 = {
    task: 'do DOM',
    priority: 1,
    project: 'default',
    description: 'complete the DOM',
    due: '13/2/2024',
    done: false
};


const project1 = {
    name: 'default',
    priority: 1,
    list: [todo1, todo2],
    description: '',
    due: '13/2/2024',
    done: false
};
const td1 = {
    task: 'do nothing',
    priority: 3,
    project: 'first',
    description: 'do nothing',
    due: '12/2/2024',
    done: false
};
const td2 = {
    task: 'play game',
    priority: 0,
    project: 'first',
    description: 'play the game',
    due: '13/2/2024',
    done: false
};
const project2 = {
    name: 'sdjfsldf',
    priority: 3,
    list: [],
    description: '',
    due: '13/2/2024',
    done: false
};
const project3 = {
    name: 'sdault',
    priority: 2,
    list: [],
    description: '',
    due: '13/2/2024',
    done: false
};
const project4 = {
    name: 'd43ult',
    priority: 0,
    list: [],
    description: '',
    due: '13/2/2024',
    done: false
};

/*
const project2 = {
    name: 'first',
    priority: 1,
    list: [td1, td2],
    description: '',
    due: '13/2/2024',
    done: false
};*/

createProjects(project1);
createProjects(project2);
createProjects(project3);
createProjects(project4);
createTodos(td1);
createTodos(td2);
//projectList[0].addTodo(todo1);
//projectList[0].addTodo(todo2);
/*console.log("Ready");
console.log(projectList);
let identity = projectList[0].list[1].showId();
transferTodos(identity, projectList[0], projectList[1]);
console.log("Ready");
console.log(projectList);
*/