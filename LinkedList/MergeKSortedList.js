class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function MergeLists(lists) {
    let mergelists = null;
    for (let i = 0; i < lists.length; i++) {
        mergelists = Merge(mergelists, lists[i]);
    }
    return mergelists;
}
function Merge(previous, current) {
    newHead = tail = new ListNode(-1);
    while (previous && current) {
        if (previous.val <= current.val) {
            tail.next = previous;
            previous = previous.next;
        } else {
            tail.next = current;
            current = current.next;
        }
        tail = tail.next;
    }
    tail.next = previous || current;
    return newHead.next;
}
head1 = new ListNode(0);
head1.next = new ListNode(1);
head1.next.next = new ListNode(2);

head2 = new ListNode(0);
head2.next = new ListNode(1);
head2.next.next = new ListNode(1);

head3 = new ListNode(2);
head3.next = new ListNode(3);
head3.next.next = new ListNode(4);
let allLists = [head1, head2, head3];
let mergeList = MergeLists(allLists);

let curr = mergeList;
let output = "";
while (curr) {
    output += curr.val + "-->";
    curr = curr.next;
}

console.log(output.trim());
