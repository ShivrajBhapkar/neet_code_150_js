class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.sort();
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.shift().element;
        }
        return null;
    }

    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function findCheapestPrice(n, flights, src, dest, k) {
    const graph = new Map();
    for (const [from, to, price] of flights) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }
        graph.get(from).push([to, price]);
    }
    const pq = new PriorityQueue();
    pq.enqueue([src, 0, -1], 0);
    while (!pq.isEmpty()) {
        const [src, cost, stops] = pq.dequeue();
        if (src === dest) {
            return cost;
        }
        if (stops < k) {
            const neighbours = graph.get(src) || [];
            for (const [neighbour, price] of neighbours) {
                pq.enqueue([neighbour, cost + price, stops + 1], cost + price);
            }
        }
    }
    return -1;
}
const n2 = 3;
const flights2 = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500],
];
const src2 = 0,
    dst2 = 2,
    k2 = 1;
console.log(findCheapestPrice(n2, flights2, src2, dst2, k2));
