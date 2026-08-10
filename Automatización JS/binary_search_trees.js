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
}

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(tree.root);
