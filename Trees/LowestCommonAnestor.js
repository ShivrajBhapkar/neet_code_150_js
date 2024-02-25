class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function findLowestCommonAncestors(realroot, root1, root2) {
    if (!realroot) {
        return null;
    }
    if (realroot === root1 || realroot === root2) {
        return realroot;
    }
    let left = findLowestCommonAncestors(realroot.left, root1, root2);
    let right = findLowestCommonAncestors(realroot.right, root1, root2);

    if (left !== null && right !== null) {
        return realroot;
    }
    if (left !== null) {
        return left;
    }
    return right;
}

let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right = new Node(5);
root.right.right = new Node(6);
root.right.left = new Node(7);

let commonnode = findLowestCommonAncestors(
    root,
    root.left.left,
    root.left.right
);
console.log(commonnode.val);
