class Queue {
    constructor() {
        this.items = [];
    }

    // Adds an element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Removes and returns the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Returns the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    // Returns true if the queue is empty, otherwise false
    isEmpty() {
        return this.items.length === 0;
    }

    // Returns the size of the queue
    size() {
        return this.items.length;
    }

    // Helper method to print the queue elements
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

function FindTime(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    let freashOranges = 0;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const queue = new Queue();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.enqueue([i, j, 0]);
            } else if (grid[i][j] === 1) {
                freashOranges++;
            }
        }
    }

    let Time = Number.MIN_SAFE_INTEGER;
    let rotting = 0;
    while (!queue.isEmpty()) {
        const curr = queue.dequeue();
        for (let i = 0; i < 4; i++) {
            const newrow = dx[i] + curr[0];
            const newcol = dy[i] + curr[1];
            Time = Math.max(Time, curr[2]);
            if (
                newrow >= 0 &&
                newcol >= 0 &&
                newrow < grid.length &&
                newcol < grid[0].length &&
                grid[newrow][newcol] === 1 &&
                !visited[newrow][newcol]
            ) {
                queue.enqueue([newrow, newcol, curr[2] + 1]);
                visited[newrow][newcol] = true;
                rotting++;
            }
        }
    }
    if (rotting !== freashOranges) {
        return -1;
    }
    return Time;
}

const result = FindTime([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
]);
console.log(result);
