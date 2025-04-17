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
            let item = new Todos(data.list[i]);
            this.list.push(item);
        }
    }
    
    changeName = function(newName) {
        this.name = newName;
    }
    changePriority = function(newPriority) {
        this.priority = newPriority;
    }
    changeDescription = function(newDescription) {
        this.description = newDescription;
    }
    changeDue = function(newDue) {
        this.due = newDue;
    }
    completed = function() {
        this.done = !this.done;
    }
    addTodo = function(data) {
        const item = new Todos(data);
        this.list.push(item);
    }
    removeTodo = function(id) {
        for(let i=0; i<this.list.length;i++) {
            if(this.list[i].id===id) {
                this.list.splice(i,1);
            }
        }
    }
    clearTodos = function() {
        for(let i=0; i<this.list.length;i++) {
            this.list.pop();
        }
    }
    output = function() {
        return {name: this.name,
                priority: this.priority,
                list: this.list,
                description: this.description,
                due: this.due,
                done: this.done}
    }
}

export {Projects};