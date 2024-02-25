function Evaluate(strs) {
    const st = [];
    // let indx = 0;
    for (let i = 0; i < strs.length; i++) {
        if (!isNaN(parseInt(strs[i]))) {
            st.push(parseInt(strs[i]));
        } else {
            if (st.length < 2) {
                return "not valid notation";
            } else {
                let second = st.pop();
                let first = st.pop();
                let result = performOperation(first, second, strs[i]);
                st.push(result);
            }
        }
    }
    return st[st.length - 1];
}
function performOperation(first, second, operator) {
    switch (operator) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return Math.trunc(first / second);
    }
}
console.log(
    Evaluate([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
    ])
);
console.log(Evaluate(["4", "13", "5", "/", "+"]));
