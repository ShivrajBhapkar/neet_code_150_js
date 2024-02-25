class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

}

function BalancedTree(root) {
    if (root === null) {
        return true;
    }
    if (Height(root) == -1) {
        return false;
    }
    return true;
}
function Height(root) {
    if (root === null) {
        return 0;
    }
    let left = Height(root.left);
    let right = Height(root.right);
    if (Math.abs(left - right) > 1) {
        return -1;
    }
    return Math.max(left, right) + 1;
}

root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);
root.right.right.right = new Node(8);

let result = BalancedTree(root);
console.log(result);