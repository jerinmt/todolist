const storeLS = function () {
    const store = {
        todos: [],
        projects: [],
    };
    for(let i=0;i<centralObject.indieTodos.length;i++) {
        let entry = centralObject.indieTodos[i].output();
        store.todos.push(entry);
    }
    for(let i=0;i<centralObject.projectList.length;i++) {
        let entry = centralObject.projectList[i].output();
        store.projects.push(entry);
    }
    localStorage.setItem('user', JSON.stringify(store));
}

const getLS = function () {
    const read = localStorage.getItem('user');
    let readObject = {};
    if(read) {
        readObject = JSON.parse(read);
        return readObject;
    }
    else {
        console.log("No stored data");
        return null;
    }
}

const centralObject = {
    projectList: [],
    indieTodos: [],
    current: null,
};

export {storeLS, getLS, centralObject};