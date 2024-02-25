class maxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.hepifyUp();
    }
    pop() {
        if (this.heap.length === 0) {
            return null;
        }
        let popped = this.heap[0];
        let lastElement = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.heapifyDown();
        }
        return popped;
    }
    size() {
        return this.heap.length;
    }
    heapifyDown() {
        let parentIndx = 0;
        while (true) {
            let leftChild = 2 * parentIndx + 1;
            let rightChild = 2 * parentIndx + 2;
            let currentIndx = parentIndx;
            if (
                leftChild < this.heap.length &&
                this.heap[leftChild].distance > this.heap[currentIndx].distance
            ) {
                currentIndx = leftChild;
            }

            if (
                rightChild < this.heap.length &&
                this.heap[rightChild].distance > this.heap[currentIndx].distance
            ) {
                currentIndx = rightChild;
            }

            if (currentIndx !== parentIndx) {
                [this.heap[currentIndx], this.heap[parentIndx]] = [
                    this.heap[parentIndx],
                    this.heap[currentIndx],
                ];
                parentIndx = currentIndx;
            } else {
                break;
            }
        }
    }
    hepifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            let parentIndx = Math.floor((currentIndex - 1) / 2);
            if (
                this.heap[parentIndx].distance <
                this.heap[currentIndex].distance
            ) {
                [this.heap[parentIndx], this.heap[currentIndex]] = [
                    this.heap[currentIndex],
                    this.heap[parentIndx],
                ];
                currentIndex = parentIndx;
            } else {
                break;
            }
        }
    }
}
function FindKClosest(points, k) {
    const maxHeaputil = new maxHeap();
    for (const point of points) {
        const [x, y] = point;
        const distance = Math.sqrt(x * x + y * y);
        if (maxHeaputil.size() < k) {
            maxHeaputil.push({ point, distance });
        } else if (distance < maxHeaputil.heap[0].distance) {
            maxHeaputil.pop();
            maxHeaputil.push({ point, distance });
        }
    }

    const result = [];
    while (maxHeaputil.size() > 0) {
        let popped = maxHeaputil.pop();
        result.push(popped.point);
    }
    return result;
}

const points = [
    [1, 3],
    [-2, 2],
    [5, -1],
];
const k = 2;
const result = FindKClosest(points, k);
console.log(result); // Output: [[-2,2],[1,3]]
