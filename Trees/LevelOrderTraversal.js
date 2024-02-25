class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function LevelOrder(root) {
    let que = [root];
    let arr = [];
    while (que.length > 0) {
        let size = que.length;
        let currarr = [];
        let indx = 0;
        while (indx < size) {
            let curr = que.shift();
            currarr.push(curr.val);
            if (curr.left !== null) {
                que.push(curr.left);
            }
            if (curr.right !== null) {
                que.push(curr.right);
            }
            indx++;
        }
        if (currarr.length > 0) {
            arr.push(currarr);
        }
    }
    return arr;
}

let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);

root.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

let level = LevelOrder(root);
console.log(level);
