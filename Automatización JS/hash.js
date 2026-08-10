class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.array = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
        this.cont = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
                hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
            }
        return hashCode;
    }

    grow() {
        this.capacity = this.capacity*2;
        let oldArray = this.array;
        this.array = Array.from({length: this.capacity}, () => []);
        let newHash;

        for (let i = 0; i < oldArray.length; i++) {
            for (let j = 0; j < oldArray[i].length; j++) {
                newHash = this.hash(oldArray[i][j][0]);
                this.array[newHash].push([oldArray[i][j][0], oldArray[i][j][1]]);
            }
        }
    }

    set(key, value) {
        let hashed = this.hash(key);
        let found = false;

        for (let i = 0; i < this.array[hashed].length; i++) { //el bucket puede tener varios pares por colisiones
            if (this.array[hashed][i][0] === key) {
                this.array[hashed][i][1] = value;
                found = true;
            }
        }
        if (found === false) {
            this.array[hashed].push([key, value]);
            this.cont++;
            if (this.loadFactor * this.capacity < this.cont) {
                this.grow();
            }
        }
    }

    get(key) {
        let hashed = this.hash(key);
        for (let i = 0; i < this.array[hashed].length; i++) { //el bucket puede tener varios pares por colisiones
            if (this.array[hashed][i][0] === key) {
                return this.array[hashed][i][1];
            }
        }
        return null;
    }

    has(key) {
        let hashed = this.hash(key);
        for (let i = 0; i < this.array[hashed].length; i++) { //el bucket puede tener varios pares por colisiones
            if (this.array[hashed][i][0] === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        let hashed = this.hash(key);
        for (let i = 0; i < this.array[hashed].length; i++) { //el bucket puede tener varios pares por colisiones
            if (this.array[hashed][i][0] === key) {
                this.array[hashed].splice(i, 1);
                this.cont--;
                return true;
            }
        }
        return false;
    }

    length() {
        return this.cont;
    }

    clear() {
        this.capacity = 16;
        this.array = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
        this.cont = 0;
    }

    keys() {
        let result = [];
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                result.push(this.array[i][j][0]);
            }
        }
        return result;
    }

    values() {
        let result = [];
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                result.push(this.array[i][j][1]);
            }
        }
        return result;
    }

    entries() {
        let result = [];
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                result.push([this.array[i][j][0],this.array[i][j][1]]);
            }
        }
        return result;
    }

}

const test = new HashMap();
test.set("apple", "red");
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('otter', 'brown')
test.set('shirt', 'black')
console.log(test.length())
console.log(test.get('hat'))
console.log(test.has('otter'))
console.log(test.remove('frog'))
console.log(test.length())
console .log(test.keys())
console .log(test.values())
console .log(test.entries())


////////////EXTRA CREDIT///////////
class HashSet {
    constructor() {
        this.map = new HashMap();
    }

    setKey(key) {
        this.map.set(key, null);
    }

    hasKey(key) {
        return this.map.has(key);
    }

    removeKey(key) {
        return this.map.remove(key);
    }

    lengthKey() {
        return this.map.length();
    }

    clearKey() {
        return this.map.clear();
    }

    keysKey() {
        return this.map.keys();
    }
}

let prueba = new HashSet();
prueba.setKey("apple", "red");
prueba.setKey('banana', 'yellow')
prueba.setKey('carrot', 'orange')
prueba.setKey('dog', 'brown')
prueba.setKey('elephant', 'gray')
prueba.setKey('frog', 'green')
prueba.setKey('grape', 'purple')
prueba.setKey('hat', 'black')
prueba.setKey('ice cream', 'white')
prueba.setKey('jacket', 'blue')
prueba.setKey('kite', 'pink')
prueba.setKey('lion', 'golden')
prueba.setKey('otter', 'brown')
prueba.setKey('shirt', 'black')
console.log(prueba.lengthKey())
console.log(prueba.hasKey('otter'))
console.log(prueba.removeKey('frog'))
console.log(prueba.lengthKey())
console .log(prueba.keysKey())