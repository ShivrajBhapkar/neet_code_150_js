function FindPossiblePartitions(str) {
    let last_occurance = Array.from({ length: 26 }, () => -1); // Initialize array with -1
    for (let indx = 0; indx < str.length; indx++) {
        last_occurance[str.charCodeAt(indx) - "a".charCodeAt(0)] = indx;
    }
    let start = 0;
    let occurance = 0;
    const result = [];
    for (let indx = 0; indx < str.length; indx++) {
        occurance = Math.max(
            occurance,
            last_occurance[str.charCodeAt(indx) - "a".charCodeAt(0)]
        );
        if (indx === occurance) {
            result.push(indx - start + 1);
            start = indx + 1;
        }
    }
    return result;
}

let str = "ababcbacadefegdehijhklij";
const newresult = FindPossiblePartitions(str);
console.log(newresult);
