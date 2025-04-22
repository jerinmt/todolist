import {Todos} from "./todos.js";


class Projects {
    constructor(data) {
        this.name = data.name;
        this.priority = data.priority;
        this.description = data.description;
        this.due = data.due;
        this.done = data.done;
        this.list = [];
        for(let i=0;i<data.list.length;i++) {
            this.addTodo(data.list[i]);
        }
    }
    
    changeName(newName) {
        this.name = newName;
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
    addTodo(data) {
        const item = new Todos(data);
        this.list.push(item);
    }
    removeTodo(id) {
        for(let i=0; i<this.list.length;i++) {
            if(this.list[i].id===id) {
                this.list.splice(i,1);
            }
        }
    }
    output() {
        const resultList = [];
        for(let i=0;i<this.list.length;i++) {
            resultList[i] = this.list[i].output();
        }
        return {name: this.name,
                priority: this.priority,
                list: resultList,
                description: this.description,
                due: this.due,
                done: this.done}
    }
}

export {Projects};