// Input: head = [
//     [7, null],
//     [13, 0],
//     [11, 4],
//     [10, 2],
//     [1, 0],
// ];
// Output: [
//     [7, null],
//     [13, 0],
//     [11, 4],
//     [10, 2],
//     [1, 0],
// ];

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
function makeDeepCopy(root) {
    const oldToNew = new Map();
    let curr = root;
    while (curr !== null) {
        oldToNew.set(curr, new ListNode(curr.val));
        curr = curr.next;
    }
    curr = root;
    while (curr) {
        oldToNew.get(curr).next = oldToNew.get(curr.next) || null;
        oldToNew.get(curr).random = oldToNew.get(curr.random) || null;
        curr = curr.next;
    }
    return oldToNew.get(root);
}
//     [7, null],
//     [13, 0],
//     [11, 4],
//     [10, 2],
//     [1, 0],
root = new ListNode(7);
root.next = new ListNode(13);
root.next.next = new ListNode(11);
root.next.next.next = new ListNode(10);
root.next.next.next.next = new ListNode(1);

root.next.random = root;
root.next.next.random = root.next.next.next.next;
root.next.next.next.random = root.next.next;
root.next.next.next.next.random = root;

let newRoot = makeDeepCopy(root);
console.log(newRoot.val);
console.log(newRoot.next.random.val);
