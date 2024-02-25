function getParentesis(num) {
    let result = [];
    function getParentesisHelper(left, right, current) {
        if (left === 0 && right === 0) {
            result.push(current);
            return;
        }
        if (left > 0) {
            getParentesisHelper(left - 1, right, current + "(");
        }
        if (right > left) {
            getParentesisHelper(left, right - 1, current + ")");
        }
    }
    getParentesisHelper(num, num, '');
    return result;
}
console.log(getParentesis(3));

