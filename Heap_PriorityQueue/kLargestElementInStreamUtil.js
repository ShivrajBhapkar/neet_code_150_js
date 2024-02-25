class KthLargestElementInStreamUtil {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = [];

        for (let num of nums) {
            this.add(num);
        }
    }
    add(val) {
        let heaplength = this.minHeap.length;
        if (heaplength < this.k) {
            this.minHeap.push(val);
            this.heapifyUp();
        } else if (val > this.minHeap[0]) {
            this.minHeap[0] = val;
            this.heapifyDown();
        }
        return this.minHeap[0];
    }

    heapifyUp() {
        let currentIndex = this.minHeap.length - 1;
        while (currentIndex > 0) {
            let parentIndex = Math.floor(currentIndex - 1) / 2;
            if (this.minHeap[parentIndex] > this.minHeap[currentIndex]) {
                [this.minHeap[currentIndex], this.minHeap[currentIndex]] = [
                    this.minHeap[parentIndex],
                    this.minHeap[currentIndex],
                ];

                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            let leftChild = 2 * currentIndex + 1;
            let rightChild = 2 * currentIndex + 2;
            let currentMin = currentIndex;
            if (
                leftChild < this.minHeap.length &&
                this.minHeap[leftChild] < this.minHeap[currentMin]
            ) {
                currentMin = leftChild;
            }

            if (
                rightChild < this.minHeap.length &&
                this.minHeap[rightChild] < this.minHeap[currentMin]
            ) {
                currentMin = rightChild;
            }

            if (currentMin !== currentIndex) {
                [this.minHeap[currentIndex], this.minHeap[currentMin]] = [
                    this.minHeap[currentMin],
                    this.minHeap[currentIndex],
                ];
                currentIndex = currentMin;
            } else {
                break;
            }
        }
    }
}
const kthLargest = new KthLargestElementInStreamUtil(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3)); // Output: 4
console.log(kthLargest.add(5)); // Output: 5
console.log(kthLargest.add(10)); // Output: 5
console.log(kthLargest.add(9)); // Output: 8
console.log(kthLargest.add(4)); // Output: 8
