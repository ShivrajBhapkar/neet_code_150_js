class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let preIndex = 0;
function ConstructTree(preOrder, inOrder, start, end) {
    if (start > end) {
        return null;
    }
    let root = new Node(preOrder[preIndex]);
    preIndex++;
    if (start === end) {
        return root;
    }
    let indx = Search(inOrder, start, end, root.val);
    root.left = ConstructTree(preOrder, inOrder, start, indx - 1);
    root.right = ConstructTree(preOrder, inOrder, indx + 1, end);
    return root;
}
function Search(inOrder, start, end, value) {
    let indx;
    for (indx = start; indx <= end; indx++) {
        if (inOrder[indx] === value) {
            return indx;
        }
    }
    return indx;
}
let preOrder = [3, 9, 20, 15, 7];
let inOrder = [9, 3, 15, 20, 7];

let newRoot = ConstructTree(preOrder, inOrder, 0, preOrder.length - 1);
console.log(newRoot.left.val);
