class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function serialize(root) {
    if (!root) {
        return "null";
    }
    const left = serialize(root.left);
    const right = serialize(root.right);
    return root.val + " , " + left + " , " + right;
}
function deserialize(serializedTree) {
    const tree = serializedTree.split(" , ");

    const deserializeUtil = () => {
        const value = tree.shift();
        if (value === "null") {
            return null;
        }
        const node = new Node(parseInt(value));
        node.left = deserializeUtil();
        node.right = deserializeUtil();
        return node; // Add the missing return statement
    };

    return deserializeUtil();
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);
const serializedTree = serialize(root);
console.log(serializedTree);

const newTree = deserialize(serializedTree);
console.log(newTree);
