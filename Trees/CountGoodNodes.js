// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.
// Example 1:
// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let count = 0;
function CountGoodNodes(root, max) {
    if (root == null) {
        return count;
    }
    if (root.val >= max.val) {
        count++;
        max = root;
    }
    if (root.left !== null) {
        CountGoodNodes(root.left, max);
    }
    if (root.right !== null) {
        CountGoodNodes(root.right, max);
    }
}

let root = new Node(3);
root.left = new Node(1);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right = new Node(4);
root.right.right = new Node(5);
root.right.left = new Node(1);
let max = root;
CountGoodNodes(root, max);
console.log(count);
