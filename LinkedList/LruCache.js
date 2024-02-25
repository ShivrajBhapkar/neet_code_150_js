class LruCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.ordering = new DoublyLinkedList();
    }
    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.ordering.moveToFront(node);
            return node.value;
        } else {
            return -1;
        }
    }

    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this.ordering.moveToFront(node);
        } else {
            if (this.cache.size === this.capacity) {
                const removeNode = this.ordering.removeFromEnd();
                this.cache.delete(removeNode.key);
            }
            const toAdd = new Node(key, value);
            this.ordering.addToFront(toAdd);
            this.cache.set(key, toAdd);
        }
    }
}

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addToFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }
    removeFromEnd() {
        if (this.head.next === this.tail) {
            return null;
        }
        const lastNode = this.tail.prev;
        this.removeNode(lastNode);
        return lastNode;
    }
    removeNode(toRemove) {
        toRemove.next.prev = toRemove.prev;
        toRemove.prev.next = toRemove.next;
    }
    moveToFront(node) {
        this.removeNode(node);
        this.addToFront(node);
    }
}
const lruCache = new LruCache(2); // Capacity is 2

lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1)); // Output: 1
lruCache.put(3, 3); // Evicts key 2
console.log(lruCache.get(2)); // Output: -1 (not found)
console.log(lruCache.get(3)); // Output: 3
