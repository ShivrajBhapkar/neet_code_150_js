// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function addTwoNumbers(root1, root2) {
    let carry = 0;
    let curr1 = root1;
    let curr2 = root2;
    let sumNode = new ListNode(-1);
    let sum = sumNode;

    while (curr1 !== null || curr2 !== null) {
        const x = curr1 ? curr1.val : 0;
        const y = curr2 ? curr2.val : 0;
        const currSum = x + y + carry;

        carry = Math.floor(currSum / 10);
        sum.next = new ListNode(currSum % 10);

        if (curr1) curr1 = curr1.next;
        if (curr2) curr2 = curr2.next;
        sum = sum.next;
    }

    if (carry > 0) {
        sum.next = new ListNode(carry);
    }

    return sumNode.next;
}

// Example usage:
const root1 = new ListNode(2);
root1.next = new ListNode(4);
root1.next.next = new ListNode(5);

const root2 = new ListNode(5);
root2.next = new ListNode(6);
root2.next.next = new ListNode(4);

const newSumNode = addTwoNumbers(root1, root2);

// Display the result
let current = newSumNode;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
