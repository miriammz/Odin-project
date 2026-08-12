import {LinkedList} from './linkedlist_lists.js';

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.insertAt(2, "horse", "otter");
console.log(list.toString());
list.removeAt(7);
console.log(list.toString());