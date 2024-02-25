class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// First Method
function InvertTree(root) {
    if (root === null) {
        return root;
    }
    let left = root.left;
    root.left = InvertTree(root.right);
    root.right = InvertTree(left);
    return root;
}

// Second Method
function InvertTreeIterative(root) {
    if (root == null) {
        return root;
    }
    let que = [root];
    while (que.length > 0) {
        let curr = que.shift();
        let left = curr.left;
        curr.left = curr.right;
        curr.right = left;
        if (curr.left !== null) {
            que.push(curr.left);
        }
        if (curr.right !== null) {
            que.push(curr.right);
        }
    }

    return root;
}
root = new Node(4);
root.left = new Node(2);
root.left.left = new Node(1);
root.left.right = new Node(3);

root.right = new Node(7);
root.right.right = new Node(9);
root.right.left = new Node(6);
// newroot = InvertTree(root);
let newroot = InvertTreeIterative(root);
console.log(newroot.left.val);
