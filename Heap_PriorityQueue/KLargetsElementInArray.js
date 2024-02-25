class MinHeap {
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
            this.hepifyDown();
        }
        return popped;
    }
    hepifyDown() {
        let currentIndex = 0;
        while (true) {
            let left = currentIndex * 2 + 1;
            let right = currentIndex * 2 + 2;
            let parentIndx = currentIndex;
            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[parentIndx]
            ) {
                parentIndx = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[parentIndx]
            ) {
                parentIndx = right;
            }

            if (parentIndx !== currentIndex) {
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

    hepifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            let parentIndx = Math.floor((currentIndex - 1) / 2);
            if (this.heap[parentIndx] > this.heap[currentIndex]) {
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

function FindKLargest(nums, k) {
    let minheap = new MinHeap();
    for (let num of nums) {
        if (minheap.heap.length < k) {
            minheap.push(num);
        } else if (num > minheap.heap[0]) {
            minheap.pop();
            minheap.push(num);
        }
    }
    return minheap.heap[0];
}
let peek = FindKLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
console.log(peek);
