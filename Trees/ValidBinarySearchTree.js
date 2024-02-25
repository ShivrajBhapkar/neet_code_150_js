class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function FindBST(root, min, max) {
    if (root === null) {
        return true;
    }

    if (root.val < min || root.val > max) {
        return false;
    }

    return (
        FindBST(root.left, min, root.val) && FindBST(root.right, root.val, max)
    );
}

let root = new Node(6);
root.left = new Node(4);
root.left.left = new Node(3);
root.left.right = new Node(5);

root.right = new Node(8);
root.right.right = new Node(9);
root.right.left = new Node(7);

let max = Number.MAX_VALUE;
let min = Number.MIN_VALUE;
let isBst = FindBST(root, min, max);
console.log(isBst);
