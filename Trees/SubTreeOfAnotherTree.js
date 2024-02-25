class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function FindRoot(root, subRoot) {
    if (!root && !subRoot) {
        return null;
    }
    if (!root || !subRoot) {
        return null;
    }
    if (root.val === subRoot.val) {
        return root;
    }

    return FindRoot(root.left, subRoot) || FindRoot(root.right, subRoot);
}
function FindIsIdentical(root, subRoot) {
    let root_util = FindRoot(root, subRoot);
   
    if (!root_util) {
        return false;
    }
    let isIdentical = IsSame(root_util, subRoot);
    return isIdentical;
}

function IsSame(root_util, subRoot) {
    if (!root_util && !subRoot) {
        return true;
    }
    if (!root_util || !subRoot) {
        return false;
    }
    return (
        root_util.val === subRoot.val &&
        IsSame(root_util.left, subRoot.left) &&
        IsSame(root_util.right, subRoot.right)
    );
}
let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);

root.right = new Node(3);

let subRoot = new Node(2);
subRoot.left = new Node(4);
subRoot.right = new Node(6);

let isIdentical = FindIsIdentical(root, subRoot);
console.log(isIdentical);
