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

    #findMin(node) {
        if (node.nodeLeft === null) {
            return node;
        } else {
            return this.#findMin(node.nodeLeft);
        }
    }

    #deleteNode(node, value) {
        if (node === null) {
            return node;
        } else if (node.data > value) {
            node.nodeLeft = this.#deleteNode(node.nodeLeft, value);
            return node;
        } else if (node.data < value) {
            node.nodeRight = this.#deleteNode(node.nodeRight, value);
            return node;
        } else if (node.data === value) {
            if (node.nodeLeft === null && node.nodeRight === null) {
                return null;
            } else if (node.nodeLeft === null || node.nodeRight === null) {
                return node.nodeLeft || node.nodeRight;
            } else {
                node.data = (this.#findMin(node.nodeRight)).data;
                node.nodeRight = this.#deleteNode(node.nodeRight, node.data);
                return node;
            }
        }
    }

    deleteItem(value) {
        this.root = this.#deleteNode(this.root, value);
    }

    levelOrderForEach(callback) {
        if (typeof callback !== 'function') {
            throw new Error('Callback is required');
        } else {
            let queue = [];
            let nodeValue;
            queue.push(this.root);
            while (queue.length > 0) {
                nodeValue = queue.shift();
                callback(nodeValue.data);
                if (nodeValue.nodeLeft !== null) {
                    queue.push(nodeValue.nodeLeft);
                }
                if (nodeValue.nodeRight !== null) {
                    queue.push(nodeValue.nodeRight);
                }
            }
        } 
    }

    #inOrderNode(node, callback) {
        if (node === null) {
            return;
        } else {
            this.#inOrderNode(node.nodeLeft, callback);
            callback(node.data);
            this.#inOrderNode(node.nodeRight, callback);
        }
    }

    //orden: izquierda, nodo actual, derecha
    inOrderForEach(callback) {
        if (typeof callback !== 'function') {
            throw new Error('Callback is required');
        } else {
            this.#inOrderNode(this.root, callback);
        }
    }

    #preOrderNode(node, callback) {
        if (node === null) {
            return;
        } else {
            callback(node.data);
            this.#preOrderNode(node.nodeLeft, callback);
            this.#preOrderNode(node.nodeRight, callback);
        }
    }

    //orden: nodo actual, izquierda, derecha
    preOrderForEach(callback) {
        if (typeof callback !== 'function') {
            throw new Error('Callback is required');
        } else {
            this.#preOrderNode(this.root, callback);
        }
    }

    #postOrderNode(node, callback) {
        if (node === null) {
            return;
        } else {
            this.#postOrderNode(node.nodeLeft, callback);
            this.#postOrderNode(node.nodeRight, callback);
            callback(node.data);
        }
    }

    //orden: izquierda, derecha, nodo actual
    postOrderForEach(callback) {
        if (typeof callback !== 'function') {
            throw new Error('Callback is required');
        } else {
            this.#postOrderNode(this.root, callback);
        }
    }

    #findNode(node, value) {
        if (node === null) {
            return null;
        } else if (node.data === value) {
            return node;
        } else if (node.data < value) {
            return this.#findNode(node.nodeRight, value);
        } else if (node.data > value) {
            return this.#findNode(node.nodeLeft, value);
        }
    }

    #calculateHeight(node) {
        if (node === null) {
            return -1;
        } else {
            let left = this.#calculateHeight(node.nodeLeft);
            let right = this.#calculateHeight(node.nodeRight);
            return 1 + Math.max(left, right);
        }
    }

    height(value) {
        let node = this.#findNode(this.root, value);
        if (node === null) {
            return undefined;
        } else {
            return this.#calculateHeight(node);
        }
    }

    depth(value) {

    }
}

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(tree.root);
console.log(tree.includes(67))
tree.levelOrderForEach(value => console.log(value))
tree.deleteItem(67)
tree.insert(52)
tree.levelOrderForEach(value => console.log(value))
