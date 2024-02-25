class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function ReOrder(root) {
    let st = [];
    curr = root;
    prev = null;

    let slow = root;
    let fast = root;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    curr = slow.next;
    slow.next = null;
    while (curr != null) {
        Next = curr.next;
        st.push(curr);
        curr = Next;
    }
    curr = root;
    while (st.length > 0) {
        currStack = st.pop();
        temp = curr.next;
        curr.next = currStack;
        currStack.next = temp;
        curr = temp;
    }
    return root;
}

root = new ListNode(0);
root.next = new ListNode(1);
root.next.next = new ListNode(2);
root.next.next.next = new ListNode(3);
root.next.next.next.next = new ListNode(4);
root.next.next.next.next.next = new ListNode(5);

let newroot = ReOrder(root);
console.log(newroot.next.next.val);
