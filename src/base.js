import { Projects } from "./projects.js";

const projectList = [];

function createProjects(data) {
    const item = new Projects(data);
    projectList.push(item);
}

function deleteProjects(item) {
    for(let i=0; i<projectList.length;i++) {
        if(projectList[i].name===item) {
            projectList.splice(i,1);
        }
    }
}

function transferTodos(id, oldProject, newProject) {
    for(let i=0;i<oldProject.list.length;i++) {
        if(oldProject.list[i].id===id) {
            oldProject.list[i].project = newProject.name;
            newProject.list.push(oldProject.list[i]);
            oldProject.list.splice(i,1);
        }
    }
}

export {createProjects, deleteProjects, transferTodos, projectList};