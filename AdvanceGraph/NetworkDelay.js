class PriorityQueue {
    constructor() {
        this.minHeap = [];
    }
    enquene(element) {
        this.minHeap.push(element);
        this.heapfyUp();
    }
    dequeue() {
        if (this.minHeap.length === 0) {
            return null;
        }
        const toRemove = this.minHeap[0];
        const lastnode = this.minHeap.pop();
        if (this.minHeap.length > 0) {
            this.minHeap[0] = lastnode;
            this.heapfyDown();
        }
        return toRemove;
    }
    heapfyDown() {
        let currentIndex = 0;
        while (true) {
            let leftChild = currentIndex * 2 + 1;
            let rightChild = currentIndex * 2 + 2;
            let currMin = currentIndex;
            if (
                leftChild < this.minHeap.length &&
                this.minHeap[leftChild] < this.minHeap[currMin]
            ) {
                currMin = leftChild;
            }

            if (
                rightChild < this.minHeap.length &&
                this.minHeap[rightChild] < this.minHeap[currMin]
            ) {
                currMin = rightChild;
            }
            if (currentIndex !== currMin) {
                [this.minHeap[currMin], this.minHeap[currentIndex]] = [
                    this.minHeap[currentIndex],
                    this.minHeap[currMin],
                ];
                currentIndex = currMin;
            } else {
                break;
            }
        }
    }
    heapfyUp() {
        let indx = this.minHeap.length - 1;
        while (indx > 0) {
            const element = this.minHeap[indx];
            const parentIndx = Math.floor((indx - 1) / 2);
            if (this.minHeap[parentIndx] <= element) {
                break;
            }
            [this.minHeap[indx], this.minHeap[parentIndx]] = [
                this.minHeap[parentIndx],
                this.minHeap[indx],
            ];
            indx = parentIndx;
        }
    }
    isEmpty() {
        return this.minHeap.length === 0;
    }
}

function NetworkDelayTime(times, n, k) {
    let adj = [];
    for (let i = 0; i <= n; i++) {
        adj[i] = [];
    }
    for (const item of times) {
        const src = item[0];
        const dest = item[1];
        const wt = item[2];
        adj[src].push([dest, wt]);
    }
    let dist = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    let que = new PriorityQueue();
    que.enquene([k, 0]);
    dist[k] = 0;
    while (!que.isEmpty()) {
        let [node, currdist] = que.dequeue();
        if (dist[node] < currdist) {
            continue;
        }
        for (const [dest, destdist] of adj[node]) {
            const nextDist = currdist + destdist;
            if (nextDist < dist[dest]) {
                dist[dest] = nextDist;
                que.enquene([dest, nextDist]);
            }
        }
    }

    let maxTime = Number.MIN_SAFE_INTEGER;
    for (let indx = 1; indx <= n; indx++) {
        if (dist[indx] === Number.MAX_SAFE_INTEGER) {
            return -1;
        }
        maxTime = Math.max(maxTime, dist[indx]);
    }
    return maxTime;
}

const result1 = NetworkDelayTime(
    [
        [2, 1, 1],
        [2, 3, 1],
        [3, 4, 1],
    ],
    4,
    2
);
console.log(result1);

const result2 = NetworkDelayTime([[1, 2, 1]], 2, 1);
console.log(result2);

const result3 = NetworkDelayTime([[1, 2, 1]], 2, 2);
console.log(result3);
