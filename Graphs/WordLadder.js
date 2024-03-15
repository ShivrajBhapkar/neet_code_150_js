// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
class Pair {
    constructor(str, step) {
        this.step = step;
        this.str = str;
    }
}
class Queue {
    constructor() {
        this.item = [];
    }
    enqueue(element) {
        this.item.push(element);
    }
    dequeue() {
        const curr = this.item.shift();
        return curr;
    }
    size() {
        return this.item.length;
    }
    isEmpty() {
        return this.item.length === 0;
    }
}
function FindMinSteps(beginWord, endWord, wordList) {
    const set = new Set(wordList);
    set.delete(beginWord);
    let min_steps = 0;
    const que = new Queue();
    que.enqueue(new Pair(beginWord, 1));
    while (!que.isEmpty()) {
        let curr = que.dequeue();
        let currstr = curr.str;
        min_steps = curr.step;
        if (currstr === endWord) {
            return min_steps;
        }
        for (let i = 0; i < currstr.length; i++) {
            for (let j = 97; j <= 122; j++) {
                let newstr =
                    currstr.substring(0, i) +
                    String.fromCharCode(j) +
                    currstr.substring(i + 1);
                if (set.has(newstr)) {
                    que.enqueue(new Pair(newstr, min_steps + 1));
                    set.delete(newstr);
                }
            }
        }
    }
    return 0;
}
const result = FindMinSteps("hit", "cog", [
    "hot",
    "dot",
    "dog",
    "lot",
    "log",
    "cog",
]);
console.log(result);
