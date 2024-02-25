class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let max = -Infinity;
function maxSum(root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return root.val;
    }
    let left = maxSum(root.left);
    let right = maxSum(root.right);
    max = Math.max(max, left + right + root.val);
    return Math.max(right + root.val, left + root.val, 0); //basically here we are returning max sum from either left or right subtree to contribute to the overall maximum path sum but if both left and right are negative then there is no point of returning there value becz they eventually decreases overall maximum Sum that's why we are also comparing 0 with them
}

let root = new Node(-10);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(-7);

maxSum(root);
console.log(max);
