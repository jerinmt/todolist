class Todos {
    constructor(data) {
        this.id = crypto.randomUUID();
        this.task = data.task;
        this.priority = data.priority;
        this.project = data.project;
        this.description = data.description;
        this.due = data.due;
        this.done = data.done;
    }
    
    changeTask = function(newTask) {
        this.task = newTask;
    }
    changePriority = function(newPriority) {
        this.priority = newPriority;
    }
    changeProject = function(newProject) {
        this.project = newProject;
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
    showId = function() {
        return this.id;
    }
    output = function() {
        return {task: this.task,
                priority: this.priority,
                project: this.project,
                description: this.description,
                due: this.due,
                done: this.done}
    }
}

export {Todos};