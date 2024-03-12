function FindPallindromePartition(str) {
    const DP = [];
    function FindPallindromePartitionUtil(indx, temp = []) {
        if (indx === str.length) {
            DP.push([...temp]);
            return;
        }
        for (let i = indx; i < str.length; i++) {
            const newstr = str.substring(indx, i + 1);
            if (IsPallindrom(newstr)) {
                temp.push(newstr);
                FindPallindromePartitionUtil(i + 1, temp);
                temp.pop();
            }
        }
    }
    function IsPallindrom(newstr) {
        let i = 0;
        let j = newstr.length - 1;
        while (i <= j) {
            if (newstr[i] !== newstr[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    FindPallindromePartitionUtil(0, []);
    return DP;
}

const result = FindPallindromePartition("aab");
console.log(result);
