import {Projects} from "./projects.js";
import { Todos } from "./todos.js";
import { addProjectDom, addTodosDom } from "./baseUI.js";

const projectList = [];
const indieTodos = [];
const currentProject = {
    name: null,
};
function createProjects(data) {
    const item = new Projects(data);
    projectList.push(item);
    addProjectDom(item);
    //addProjectLs(item);
}

function deleteProjects(item) {
    for(let i=0; i<projectList.length;i++) {
        if(projectList[i].name===item) {
            projectList.splice(i,1);
        }
    }
}

function createTodos(data) {
    const item = new Todos(data);
    if(currentProject.name==null) {
        indieTodos.push(item);
        addTodosDom(item, null);
    }
    else {
        for(let i=0; i<projectList.length;i++) {
            if(projectList[i].name===currentProject.name) {
                projectList[i].addTodo(item);
                addTodosDom(item, projectList[i].name);
            }
        }
    }
}

function deleteTodos(id) {
    for(let i=0; i<indieTodos.length;i++) {
        if(indieTodos[i].id===id) {
            indieTodos.splice(i,1);
        }
    }
    for(let i=0;i<projectList.length;i++) {
        for(let j=0;j<projectList[i].list.length;j++) {
            if(projectList[i].list[j].id==id) {
                projectList[i].list.splice(j,1);
            }
        }
    }
    console.log(indieTodos, projectList);
}



export {createProjects, deleteProjects, createTodos, deleteTodos, currentProject};