class LastStone {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.hepifyUp();
    }
    pop() {
        if (this.heap.length === 0) {
            return null;
        }
        let poppedValue = this.heap[0];

        let pop = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = pop;
            this.heapifyDown();
        }
        return poppedValue;
    }
    hepifyUp() {
        let currentIndx = this.hepifyUp.length - 1;
        while (currentIndx > 0) {
            const parentIndx = Math.floor((currentIndx - 1) / 2);

            if (this.heap[parentIndx] < this.heap[currentIndx]) {
                [this.heap[parentIndx], this.heap[currentIndx]] = [
                    this.heap[currentIndx],
                    this.heap[parentIndx],
                ];
            } else {
                break;
            }
        }
    }
    heapifyDown() {
        let currentIndx = 0;
        while (currentIndx < this.heap.length - 1) {
            let left = 2 * currentIndx + 1;
            let right = 2 * currentIndx + 2;
            let Index = currentIndx;
            if (this.heap[Index] < this.heap[left]) {
                Index = left;
            }

            if (this.heap[Index] < this.heap[right]) {
                Index = right;
            }

            if (Index !== currentIndx) {
                [this.heap[Index], this.heap[currentIndx]] = [
                    this.heap[currentIndx],
                    this.heap[Index],
                ];
                currentIndx = Index;
            } else {
                break;
            }
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : 0;
    }
    size() {
        return this.heap.length > 0 ? this.heap.length : 0;
    }
}
function lastStoneWeight(stones) {
    const minHeap = new LastStone();
    for (let stone in stones) {
        minHeap.push(stone);
    }
    while (minHeap.size() > 1) {
        let first = minHeap.pop();
        let second = minHeap.pop();
        if (first !== second) {
            minHeap.push(Math.abs(first - second));
        }
    }

    return minHeap.size() === 1 ? minHeap.peek() : 0;
}
const stones = [2, 7, 4, 1, 8, 1];
const result = lastStoneWeight(stones);
console.log(result); // Output: 1
