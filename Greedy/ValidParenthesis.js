function FindIfValid(str) {
    let length = str.length;
    let open = 0;
    let close = 0;
    let indx = 0;
    while (indx < length) {
        if (str[indx] === "(") {
            open++;
        }
        if (str[indx] === ")") {
            close++;
        }
        if (close > open) {
            console.log("inside invalid");
            return false;
        }
        indx++;
    }
    if (open !== close) {
        return false;
    }
    return true;
}

const isValidstring = FindIfValid("(())");
console.log(isValidstring);



function checkValidString(s) {
    return isValid(s, 0, 0);
}

function isValid(s, balance, index) {
    if (balance < 0) {
        // The balance cannot be negative, so return false
        return false;
    }

    if (index === s.length) {
        // We reached the end of the string, check if the balance is zero
        return balance === 0;
    }

    const currentChar = s[index];

    if (currentChar === '(') {
        // Treat '(' as left parenthesis
        return isValid(s, balance + 1, index + 1);
    } else if (currentChar === ')') {
        // Treat ')' as right parenthesis
        return isValid(s, balance - 1, index + 1);
    } else {
        // Treat '*' as three possibilities: left parenthesis, right parenthesis, or empty string
        return (
            isValid(s, balance, index + 1) ||
            isValid(s, balance + 1, index + 1) ||
            isValid(s, balance - 1, index + 1)
        );
    }
}

// Example usage:
console.log(checkValidString("()"));    // Output: true
console.log(checkValidString("(*)"));   // Output: true
console.log(checkValidString(")(*))"));  // Output: true

