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

export {Todos};