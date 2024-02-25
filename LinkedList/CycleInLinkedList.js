class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function findCycle(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
}
root = new ListNode(0);
root.next = new ListNode(1);
root.next.next = new ListNode(2);
root.next.next.next = new ListNode(3);
root.next.next.next.next = new ListNode(4);
root.next.next.next.next = root.next.next.next;
let iscycle = findCycle(root);
console.log(iscycle);
