// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
function Find_Valid(str) {
    let stack = [];
    for (const bracket of str.split("")) {
        if (isOpen(bracket)) {
            stack.push(bracket);
        } else if(stack.length === 0 && isClose(bracket)){
            return false;   
        } else {
            if (
                (stack[stack.length - 1] === "(" && bracket !== ")") ||
                (stack[stack.length - 1] === "{" && bracket !== "}") ||
                (stack[stack.length - 1] === "[" && bracket !== "]")
            ) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    return stack.length === 0;
}
function isOpen(char) {
    if (char === "{" || char === "[" || char === "(") {
        return true;
    }
    return false;
}
function isClose(char) {
    if (char === "}" || char === "]" || char === ")") {
        return true;
    }
    return false;
}
const str = "()[](([]){})";
let isValid = Find_Valid(str);
console.log(isValid);
