export class ToDo {
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