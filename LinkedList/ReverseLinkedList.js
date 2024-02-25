class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next; // Save the next node
        current.next = prev; // Reverse the pointer
        prev = current; // Move one step forward in the list
        current = next; // Move one step forward in the list
    }

    // After the loop, 'prev' will be the new head of the reversed list
    return prev;
}
function printList(root) {
    while (root != null) {
        console.log(root.value);
        root = root.next;
    }
}
let root = new Node(1);
root.next = new Node(2);
root.next.next = new Node(3);
root.next.next.next = new Node(4);
root.next.next.next.next = new Node(5);

printList(root);

let newRoot = reverseLinkedList(root);
console.log("List after reverse :- ");
printList(newRoot);
