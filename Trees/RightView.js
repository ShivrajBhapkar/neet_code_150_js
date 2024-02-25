class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function RightView(root) {
    let result = [];
    let que = [];
    if (root === null) {
        return result;
    }

    que = [root];
    while (que.length > 0) {
        let length = que.length;
        let indx = 0;
        while (indx < length) {
            let curr = que.shift();
            if (indx === length - 1) {
                result.push(curr.val);
            }
            if (curr.left !== null) {
                que.push(curr.left);
            }
            if (curr.right !== null) {
                que.push(curr.right);
            }
            indx++;
        }
    }
    return result;
}

let root = new Node(1);
root.left = new Node(2);
root.left.right = new Node(3);
root.left.left = new Node(4);
root.right = new Node(5);
root.right.right = new Node(6);
root.right.left = new Node(7);

let rightview = RightView(root);
console.log(rightview);
