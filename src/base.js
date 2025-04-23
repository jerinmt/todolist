import {Todos} from "./todos.js";
import {Projects} from "./projects.js";
import {addTodosDom} from "./todosUI.js";
import {addProjectDom} from "./projectsUI.js";
import {storeLS, centralObject} from "./data.js";

function createProjects(data) {
    const item = new Projects(data);
    centralObject.projectList.push(item);
    storeLS();
    addProjectDom(item);
    //addProjectLs(item);
}

function createTodos(data) {
    const item = new Todos(data);
    if(centralObject.current==null) {
        centralObject.indieTodos.push(item);
        storeLS();
        addTodosDom(item, null);
    }
    else {
        for(let i=0; i<centralObject.projectList.length;i++) {
            if(centralObject.projectList[i].id===centralObject.current) {
                centralObject.projectList[i].addTodo(item);
                storeLS();
                addTodosDom(item, centralObject.projectList[i].id);
            }
        }
    }
}

export {createProjects, createTodos};