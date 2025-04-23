import { Todos } from "./todos.js";
import { Projects } from "./projects.js";
import { addTodosDom} from "./todosUI.js";
import { addProjectDom } from "./projectsUI.js";
import {initialiseButtons, makeProject, makeTodo} from "./baseUI.js";

const centralObject = {
    projectList: [],
    indieTodos: [],
    current: null,
};
function createProjects(data) {
    const item = new Projects(data);
    centralObject.projectList.push(item);
    addProjectDom(item);
    //addProjectLs(item);
}

function deleteProjects(item) {
    for(let i=0; i<centralObject.projectList.length;i++) {
        if(centralObject.projectList[i].id===item) {
            centralObject.projectList.splice(i,1);
        }
    }
}

function createTodos(data) {
    const item = new Todos(data);
    if(centralObject.current==null) {
        centralObject.indieTodos.push(item);
        addTodosDom(item, null);
    }
    else {
        for(let i=0; i<centralObject.projectList.length;i++) {
            if(centralObject.projectList[i].id===centralObject.current) {
                centralObject.projectList[i].addTodo(item);
                addTodosDom(item, centralObject.projectList[i].id);
            }
        }
    }
}

function deleteTodos(id) {
    for(let i=0; i<centralObject.indieTodos.length;i++) {
        if(centralObject.indieTodos[i].id===id) {
            centralObject.indieTodos.splice(i,1);
        }
    }
    for(let i=0;i<centralObject.projectList.length;i++) {
        for(let j=0;j<centralObject.projectList[i].list.length;j++) {
            if(centralObject.projectList[i].list[j].id==id) {
                centralObject.projectList[i].list.splice(j,1);
            }
        }
    }
}



export {createProjects, deleteProjects, createTodos, deleteTodos, centralObject};