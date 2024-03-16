class Pair {
    constructor(node, dist) {
        this.node = node;
        this.dist = dist;
    }
}
class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    enqueuene(element) {
        this.heap.push(element);
        this.heapUp();
    }
    dequeue() {
        if (this.heap.length === 0) {
            return null;
        }
        let popped = this.heap[0];
        let lastnode = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastnode;
            this.heapifyDown();
        }
        return popped;
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    heapUp() {
        let indx = this.heap.length - 1;
        while (indx > 0) {
            const element = this.heap[indx];
            const parentIndx = Math.floor((indx - 1) / 2);
            if (this.heap[parentIndx] <= element) {
                break;
            }
            [this.heap[indx], this.heap[parentIndx]] = [
                this.heap[parentIndx],
                this.heap[indx],
            ];
            indx = parentIndx;
        }
    }
    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            let leftChild = 2 * currentIndex + 1;
            let rightChild = 2 * currentIndex + 2;
            let currentMin = currentIndex;
            if (
                leftChild < this.heap.length &&
                this.heap[leftChild] < this.heap[currentMin]
            ) {
                currentMin = leftChild;
            }

            if (
                rightChild < this.heap.length &&
                this.heap[rightChild] < this.heap[currentMin]
            ) {
                currentMin = rightChild;
            }

            if (currentMin !== currentIndex) {
                [this.heap[currentIndex], this.heap[currentMin]] = [
                    this.heap[currentMin],
                    this.heap[currentIndex],
                ];
                currentIndex = currentMin;
            } else {
                break;
            }
        }
    }
}

function networkDelayTime(times, n, k) {
    const adj = [];
    for (let i = 0; i <= n; i++) {
        adj[i] = [];
    }
    for (const [src, dest, wt] of times) {
        adj[src].push([dest, wt]);
    }
    const que = new PriorityQueue();
    que.enqueuene([k, 0]);
    const distance = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    distance[k] = 0;
    while (!que.isEmpty()) {
        const [node, dist] = que.dequeue();
        if (distance[node] < dist) {
            continue;
        }
        for (const [dest, currdist] of adj[node]) {
            const nextDist = dist + currdist;
            if (distance[dest] > nextDist) {
                distance[dest] = nextDist;
                que.enqueuene([dest, nextDist]);
            }
        }
    }
    let maxDistance = 0;
    for (let i = 1; i <= n; i++) {
        if (distance[i] === Number.MAX_SAFE_INTEGER) {
            return -1;
        }
        maxDistance = Math.max(maxDistance, distance[i]);
    }
    return maxDistance;
}

const times1 = [
    [2, 1, 1],
    [2, 3, 1],
    [3, 4, 1],
];
const n1 = 4,
    k1 = 2;
console.log(networkDelayTime(times1, n1, k1)); // Output: 2
const times2 = [[1, 2, 1]];
const n2 = 2,
    k2 = 1;
console.log(networkDelayTime(times2, n2, k2)); // Output: 1

const times3 = [[1, 2, 1]];
const n3 = 2,
    k3 = 2;
console.log(networkDelayTime(times3, n3, k3)); // Output: -1
