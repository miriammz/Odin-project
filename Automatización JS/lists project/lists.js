class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

//representará la lista completa
class LinkedList {
    constructor() {
        this.headProp = null;
        this.tailProp = null;
        this.length = 0;
    }

    //añadir un nodo nuevo al final de la lista
    append(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.headProp = newNode;
            this.tailProp = newNode;
        } else {
            this.tailProp.nextNode = newNode;
            this.tailProp = newNode;
        }
        this.length++;
    }

    //añadir un nodo nuevo al principio de la lista
    prepend(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.headProp = newNode;
            this.tailProp = newNode;
        } else {
            newNode.nextNode = this.headProp;
            this.headProp = newNode;
        }
        this.length++;
    }

    //devuelve el número total de nodos
    size() {
        return this.length;
    }

    //devuelve el valor del primer nodo de la lista
    head() {
        let value;
        if (this.length === 0) {
            value = undefined;
        } else {
            value = this.headProp.value;
        }
        return value;
    }

    //devuelve el valor del último nodo de la lista
    tail() {
        let value;
        if (this.length === 0) {
            value = undefined;
        } else {
            value = this.tailProp.value;
        }
        return value;
    }

    //devuelve el valor del nodo dado
    at(index) {
        let value;
        if (index >= this.length) {
            value = undefined;
        } else {
            let currentNode = this.headProp;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.nextNode;
            }
            value = currentNode.value;
        }
        return value;
    }

    //elimina head y devuelve el valor que tiene
    pop() {
        let value;
        if (this.length === 0) {
            value = undefined;
        } else if (this.length === 1) {
            value = this.headProp.value;
            this.headProp = null;
            this.tailProp = null;
            this.length = 0;
        } else {
            value = this.headProp.value;
            let newHeadNode = this.headProp.nextNode;
            this.headProp = newHeadNode;
            this.length = this.length - 1;
        }
        return value;
    }

    //devuelve true/false si el valor dado está o no en la lista
    contains(value) {
        let index = this.findIndex(value);
        if (index === -1) {
            return false;
        } else {
            return true;
        }
    }

    //devuelve el índice del nodo para el valor dado
    //si el valor no está, devuelve -1
    //si hay varios nodos con el mismo valor, devuelve el primero que encuentra
    findIndex(value) {
        let index = 0;
        let currentNode = this.headProp;
        while (currentNode !== null) {
            if (value === currentNode.value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return -1;
    }

    toString() {
        let string;
        if (this.length === 0) {
            string = '';
        } else {
            let currentNode = this.headProp;
            let value = 0;
            string = '';
            for (let i = 0; i < this.length; i++) {
                value = currentNode.value;
                string += `( ${value} ) -> `;
                currentNode = currentNode.nextNode;
            }
            string = string + "null";
        }
        return string;
    }
}