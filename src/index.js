import {createProjects, createTodos} from "./base.js";
import {initialiseButtons} from "./baseUI.js";
import {getLS} from "./data.js";
import "./styles.css";

initialiseButtons();
const storedData = getLS();
if(storedData) {
    if(storedData.todos) {
        for(let i=0;i<storedData.todos.length;i++) {
            createTodos(storedData.todos[i]);
        }
    }
    if(storedData.projects) {
        for(let i=0;i<storedData.projects.length;i++) {
            createProjects(storedData.projects[i]);
        }
    }
}