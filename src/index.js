import { Todos } from "./todos.js";
import { Projects } from "./projects.js";
import {createProjects, deleteProjects, transferTodos, projectList} from "./base.js";



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
    priority: 2,
    project: 'first',
    description: 'do nothing',
    due: '12/2/2024',
    done: false
};
const td2 = {
    task: 'play game',
    priority: 1,
    project: 'first',
    description: 'play the game',
    due: '13/2/2024',
    done: false
};


const project2 = {
    name: 'first',
    priority: 1,
    list: [td1, td2],
    description: '',
    due: '13/2/2024',
    done: false
};

createProjects(project1);
createProjects(project2);
console.log("Ready");
console.log(projectList);
let identity = projectList[0].list[1].showId();
transferTodos(identity, projectList[0], projectList[1]);
console.log("Ready");
console.log(projectList);
