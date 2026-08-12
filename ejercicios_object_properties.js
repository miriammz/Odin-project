/*let user = {
    name: "John",
    surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

console.log(user.fullName);
user.fullName = "Alice Cooper";
console.log(user.name);
console.log(user.surname);

//otra manera
let user = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Nombre muy corto, necesarios al menos 4 caracteres");
            return;
        }
        this._name = value;
    }
};

user.name = "Pete";
console.log(user.name);*/

//otra manera con class
class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name);

user = new User("");