export class ToDo {
    constructor(title, description, dueDate, priority, isDone = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = isDone;
        this.notes = null;
        this.id = crypto.randomUUID();
        this.checklist = [];
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

    addChecklistItem(text) {
        let object = {id: crypto.randomUUID(), texto: text, isDone: false};
        this.checklist.push(object);
        return object;
    }

    toggleChecklistItem(id) {
        const item = this.checklist.find(task => task.id === id);
        if (item) {
            item.isDone = !item.isDone;
        }
        return item;
    }

    editTask(changes) {
        const allowedFields = ["title", "description", "dueDate", "priority"];

        Object.keys(changes).filter(key => allowedFields.includes(key)).forEach(key => this[key] = changes[key]);
        return this;
    }
}