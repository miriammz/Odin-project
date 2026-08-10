class Node {
    constructor(data, nodeLeft = null, nodeRight = null) {
        this.data = data;
        this.nodeLeft = nodeLeft;
        this.nodeRight = nodeRight;
    }
}

class Tree {
    constructor(array) {
        this.array = this.#sortAndRemoveDup(array);
        this.root = this.#buildTree(this.array);
    }

    #sortAndRemoveDup(array) {
        array = [...new Set(array)];
        let orden = array.sort((a, b) => a - b);
        return orden;
    }

    #buildTree(array) {
        let node = new Node();
        if (array.length === 0) {
            return null;
        } else {
            let medio = Math.floor(array.length / 2);
            node.data = array[medio];
            node.nodeLeft = this.#buildTree(array.slice(0, medio));
            node.nodeRight = this.#buildTree(array.slice(medio + 1));
            return node;
        }
    }

    #includesNode(node, value) {
        if (node === null) {
            return false;
        } else if (node.data === value) {
            return true;
        } else if (node.data < value) {
            return this.#includesNode(node.nodeRight, value);
        } else if (node.data > value) {
            return this.#includesNode(node.nodeLeft, value);
        }
    }

    includes(value) {
        return this.#includesNode(this.root, value);
    }

    #insertNode(node, value) {
        if (node === null) {
            let newNode = new Node(value);
            return newNode;
        } else if (node.data === value) {
            return node;
        } else if (node.data > value) {
            node.nodeLeft = this.#insertNode(node.nodeLeft, value);
            return node;
        } else if (node.data < value) {
            node.nodeRight = this.#insertNode(node.nodeRight, value);
            return node;
        }
    }

    insert(value) {
        this.root = this.#insertNode(this.root, value);
    }
}

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(tree.root);
console.log(tree.includes(67))
