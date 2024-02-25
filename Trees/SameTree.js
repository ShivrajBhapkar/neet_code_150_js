class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function Same(root1, root2) {
    let que1 = [root1];
    let que2 = [root2];
    while (que1.length > 0 && que2.length > 0) {
        const curr1 = que1.shift();
        const curr2 = que2.shift();
        if (!curr1 || !curr2) {
            return false;
        }
        if (curr1.val !== curr2.val) {
            return false;
        }
        if (curr1.left !== null) {
            que1.push(curr1.left);
        }
        if (curr1.right !== null) {
            que1.push(curr1.right);
        }

        if (curr2.left !== null) {
            que2.push(curr2.left);
        }

        if (curr2.right !== null) {
            que2.push(curr2.right);
        }
    }

    return que1.length === 0 && que2.length === 0;
}

let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);

let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
// root2.right.left = new Node(4);

let result = Same(root1, root2);
console.log(result);
