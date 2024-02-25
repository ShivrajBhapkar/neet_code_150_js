function findMedian(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;

    let realmid = Math.floor((len1 + len2 + 1) / 2);
    let left = 0;
    let right = len1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let othermid = realmid - mid;
        let leftarr1 = mid > 0 ? arr1[mid - 1] : Number.MIN_VALUE;
        let leftarr2 = othermid > 0 ? arr2[othermid - 1] : Number.MIN_VALUE;
        let rightarr1 = mid < len1 ? arr1[mid] : Number.MAX_VALUE;
        let rightarr2 = othermid < len2 ? arr2[othermid] : Number.MAX_VALUE;
        if (leftarr1 <= rightarr2 && leftarr2 <= rightarr1) {
            if ((len1 + len2) % 2 === 0) {
                let sum =
                    Math.max(leftarr1, leftarr2) +
                    Math.min(rightarr1, rightarr2);
                return sum / 2;
            } else {
                return Math.max(leftarr1, leftarr2);
            }
        } else if (leftarr1 > rightarr2) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return 0.0;
}
console.log(findMedian([2], [1,3]));
