class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function Reverse(curr) {
    let prev = null;
    let currNode = curr;
    while (currNode != null) {
        currNext = currNode.next;
        currNode.next = prev;
        prev = currNode;
        currNode = currNext;
    }
    return prev;
}
function reverseKGroup(head, k) {
    let currHead = head;
    let currTail = head;
    let preTail = null;
    let nextHead = null;
    let count = 0;
    while (currHead !== null) {
        count = 1;
        while (currTail != null && count < k) {
            currTail = currTail.next;
            count++;
        }
        if (count !== k || currTail === null) {
            break;
        }

        nextHead = currTail.next;
        currTail.next = null;
         if (preTail !== null) {
             preTail.next = Reverse(currHead);
         } else {
             head = Reverse(currHead);
         }
        preTail = currHead;
        currHead.next = nextHead;
        currHead = nextHead;
        currTail = nextHead;
    }
    return head;
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

let k = 3;
let reversedHead = reverseKGroup(head, k);
// Print the reversed linked list
let curr = reversedHead;
while (curr) {
    console.log(curr.val);
    curr = curr.next;
}
