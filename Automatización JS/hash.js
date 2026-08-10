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
                console.log("aumentar capacidad")
            }
            console.log(this.array)
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