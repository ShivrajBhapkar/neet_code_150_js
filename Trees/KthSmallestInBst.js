class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let count = 0;
let currmin = -1;
function FindKthSmall(root, k) {
    if (!root) {
        return;
    }
    FindKthSmall(root.left,k);
    if (count++ < k) {
        currmin = root.val;
    }
    FindKthSmall(root.right,k);
   
}

let root = new Node(3);
root.left = new Node(1);
root.left.right = new Node(2);
root.right = new Node(4);
let k = 1;
FindKthSmall(root, k);
console.log(currmin);
