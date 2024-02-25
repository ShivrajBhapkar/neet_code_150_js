class MedianFinder {
    constructor() {
        this.lowerHalf = new MaxHeap();
        this.upperHalf = new MinHeap();
    }

    addNum(num) {
        if (this.lowerHalf.isEmpty() || num <= this.lowerHalf.peek()) {
            this.lowerHalf.insert(num);
        } else {
            this.upperHalf.insert(num);
        }

        // Balance the heaps
        if (this.lowerHalf.size() > this.upperHalf.size() + 1) {
            this.upperHalf.insert(this.lowerHalf.extract());
        } else if (this.upperHalf.size() > this.lowerHalf.size()) {
            this.lowerHalf.insert(this.upperHalf.extract());
        }
    }

    findMedian() {
        if (this.lowerHalf.size() === this.upperHalf.size()) {
            return (this.lowerHalf.peek() + this.upperHalf.peek()) / 2;
        } else {
            return this.lowerHalf.peek();
        }
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(num) {
        this.heap.push(num);
        this.heapifyUp();
    }

    extract() {
        if (this.isEmpty()) {
            return null;
        }

        const root = this.heap[0];
        const lastElement = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = lastElement;
            this.heapifyDown();
        }

        return root;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let index = this.size() - 1;

        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (parent >= element) {
                break;
            }

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let largest = index;

            if (
                leftChildIndex < this.size() &&
                this.heap[leftChildIndex] > this.heap[largest]
            ) {
                largest = leftChildIndex;
            }

            if (
                rightChildIndex < this.size() &&
                this.heap[rightChildIndex] > this.heap[largest]
            ) {
                largest = rightChildIndex;
            }

            if (index !== largest) {
                this.swap(index, largest);
                index = largest;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(num) {
        this.heap.push(num);
        this.heapifyUp();
    }

    extract() {
        if (this.isEmpty()) {
            return null;
        }

        const root = this.heap[0];
        const lastElement = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = lastElement;
            this.heapifyDown();
        }

        return root;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let index = this.size() - 1;

        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (parent <= element) {
                break;
            }

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (
                leftChildIndex < this.size() &&
                this.heap[leftChildIndex] < this.heap[smallest]
            ) {
                smallest = leftChildIndex;
            }

            if (
                rightChildIndex < this.size() &&
                this.heap[rightChildIndex] < this.heap[smallest]
            ) {
                smallest = rightChildIndex;
            }

            if (index !== smallest) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

// Example usage:
let medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // Output: 1.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Output: 2.0
