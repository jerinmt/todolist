import { Todos } from "./todos.js";
import { Projects } from "./projects.js";
import {createProjects, deleteProjects, createTodos, deleteTodos, centralObject} from "./base.js";
import { addTodosDom} from "./todosUI.js";
import { addProjectDom } from "./projectsUI.js";
import {initialiseButtons, makeProject, makeTodo} from "./baseUI.js";
import "./styles.css";


initialiseButtons();
