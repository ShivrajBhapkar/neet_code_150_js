class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function maxDepthUtil(root, max = [0]) {
    maxDepth(root, max);
    return max[0];
}
function maxDepth(root, max) {
    if (root === null) {
        return 0;
    }
    let left = maxDepth(root.left,max);
    let right = maxDepth(root.right,max);
    max[0] = Math.max(max[0], left + right);
    return 1 + Math.max(left, right);
}

let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right = new Node(5);
let maxDepthresult = maxDepthUtil(root);
console.log(maxDepthresult);
