class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function Merge(root1, root2) {
    newroot = new ListNode(-1);
    temp = newroot;
    curr1 = root1;
    curr2 = root2;
    while (curr1 != null && curr2 != null) {
        if (curr1.val <= curr2.val) {
            temp.next = curr1;
            curr1 = curr1.next;
        } else {
            temp.next = curr2;
            curr2 = curr2.next;
        }
        temp = temp.next;
    }

    if (curr1 != null) {
        temp.next = curr1;
    } else if (curr2 != null) {
        temp.next = curr2;
    }
    return newroot.next.val;
}
root1 = new ListNode(0);
root1.next = new ListNode(2);
root1.next.next = new ListNode(3);
root1.next.next.next = new ListNode(4);
root1.next.next.next.next = new ListNode(5);

root2 = new ListNode(1);
root2.next = new ListNode(1);
root2.next.next = new ListNode(3);
root2.next.next.next = new ListNode(4);
root2.next.next.next.next = new ListNode(5);

let newroot1 = Merge(root1, root2);
console.log(newroot1);
