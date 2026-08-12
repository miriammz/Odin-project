class ToDo {
    constructor(title, description, dueDate, priority, isDone = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = isDone;
        this.notes = null;
        this.id = crypto.randomUUID();
    }

    getList() {
        let list = (`${this.title}, ${this.description}, fecha límite: ${this.dueDate}, con prioridad: ${this.priority}, ${this.isDone}`);
        if (this.notes) {
            list += `, NOTA: ${this.notes}`;
        }
        return list;
    }

    includeNotes(notes) {
        this.notes = notes;
    }

    completeTask() {
        this.isDone = true;
    }
}

class Project {
    constructor(name, collection = []) {
        this.name = name;
        this.collection = collection;
    }

    addTask(title, description, dueDate, priority, isDone) {
        const task = new ToDo(title, description, dueDate, priority, isDone);
        this.collection.push(task);
        return task;
    }

    removeTask(id) {
        this.collection = this.collection.filter(task => task.id !== id);
    }

    listTitles() {
        let names = [];
        for (let i = 0; i < this.collection.length; i++) {
            names.push(this.collection[i].title);
        }
        return names.join(", ");
    }
}

function saveProjects(projects) {
    let projectsString = JSON.stringify(projects);
    localStorage.setItem("listas", projectsString);
}

let list1 = new Project("Comprar");
list1.addTask("pan", "integral", "hoy", "alta", false);
list1.addTask("leche", "entera", "mañana", "media", false);
list1.addTask("huevos", "camperos", "hoy", "alta", false);
list1.addTask("fruta", "manzanas", "lunes", "baja", false);
const verdura = list1.addTask("verdura", "lechuga", "martes", "media", false);

let list2 = new Project("Maleta");
list2.addTask("vestidos", "cortos", "jueves", "alta", false);
list2.addTask("bañadores", "cuatro", "viernes", "alta", false);
list2.addTask("neceser", "cosas de baño", "jueves", "media", false);

let projects = [];
projects.push(list1, list2);
saveProjects(projects);
/*console.log(projects)
console.log(JSON.stringify(projects))

console.log(list1.listTitles())
list1.removeTask(verdura.id)
console.log(list1.listTitles())
console.log(list1)*/