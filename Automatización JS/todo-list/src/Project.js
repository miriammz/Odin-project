import {ToDo} from "./ToDo.js";

export class Project {
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