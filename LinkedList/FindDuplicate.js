function findDuplicate(num) {
    let set = new Set();
    for (const item of num) {
        if (set.has(item)) {
            return item;
        }
        set.add(item);
    }
    return -1;
}
function findDuplicateUtil(num) {
    let start = 0;
    let end = num.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        let count = 0;
        for (let i = 0; i < num.length; i++) {
            if (num[i] <= mid) {
                count += 1;
            }
        }
        if (count > mid) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
}

let num = [1, 2, 3, 4, 4, 5];
let dup = findDuplicateUtil(num);
console.log(dup);
