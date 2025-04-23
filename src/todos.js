import {storeLS, centralObject} from "./data.js";


class Todos {
    constructor(data) {
        this.task = data.task;
        this.priority = data.priority;
        this.description = data.description;
        this.due = data.due;
        this.done = data.done;
        this.id = crypto.randomUUID();
    }
    
    changeTask(newTask) {
        this.task = newTask;
    }
    changePriority(newPriority) {
        this.priority = newPriority;
    }
    changeDescription(newDescription) {
        this.description = newDescription;
    }
    changeDue(newDue) {
        this.due = newDue;
    }
    completed() {
        this.done = !this.done;
    }
    output() {
        return {task: this.task,
                priority: this.priority,
                project: this.project,
                description: this.description,
                due: this.due,
                done: this.done}
    }
}

function deleteTodos(id) {
    for(let i=0; i<centralObject.indieTodos.length;i++) {
        if(centralObject.indieTodos[i].id===id) {
            centralObject.indieTodos.splice(i,1);
            storeLS();
        }
    }
    for(let i=0;i<centralObject.projectList.length;i++) {
        for(let j=0;j<centralObject.projectList[i].list.length;j++) {
            if(centralObject.projectList[i].list[j].id==id) {
                centralObject.projectList[i].list.splice(j,1);
                storeLS();
            }
        }
    }
}

export {Todos, deleteTodos};
