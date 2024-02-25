class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function MaxDepth(root) {
    if (root === null) {
        return 0;
    }
    let left = MaxDepth(root.left) + 1;
    let right = MaxDepth(root.right) + 1;
    return Math.max(left, right);
}
root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);
let depth = MaxDepth(root);
console.log(depth);