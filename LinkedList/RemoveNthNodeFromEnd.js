class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function RemoveNthNode(root, n) {
    let length = 0;
    curr = root;
    while (curr != null) {
        length++;
        curr = curr.next;
    }
    let targetnode = length - n;
    if (targetnode === 0) {
        return root.next;
    }
    let count = 0;
    curr = root;
    prev = null;
    while (count < targetnode) {
        currNext = curr.next;
        prev = curr;
        curr = currNext;
        count++;
    }
    prev.next = curr.next;
    return root;
}
root = new ListNode(1);
root.next = new ListNode(2);
root.next.next = new ListNode(3);
root.next.next.next = new ListNode(4);
root.next.next.next.next = new ListNode(5);
let target = 5;
let newroot = RemoveNthNode(root, target);
while (newroot !== null) {
    console.log(newroot.val);
    newroot = newroot.next;
}
