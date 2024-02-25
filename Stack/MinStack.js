// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

class MinstackUtil {
    constructor() {
        this.stack = [];
        this.minstack = [];
    }


 push(val, { minstack } = this) {
    this.stack.push(val);
    let isminEmpty = !minstack.length;
    let isminVal = val <= minstack[minstack.length - 1];
    if (isminEmpty || isminVal) {
        minstack.push(val);
    }
}

 pop({ stack, minstack } = this) {
    const top = stack.pop();
    const canMin = top === this.getMin();
    if (canMin) {
        minstack.pop();
    }
}

 top(stack = this.stack) {
    return stack.length ? stack[stack.length - 1] : null;
}

 getMin({ minstack } = this) {
    return this.top(minstack);
}
}

const st =new MinstackUtil();
st.push(1);
st.push(-2);
st.pop();
console.log(st.top());
console.log(st.getMin());