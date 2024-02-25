// Medium

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.
function Find_Permutation(str1, str2) {
    let mapstr1 = new Map();
    let mapstr2 = new Map();
    // Set Frequency of the str1
    for (let i = 0; i < str1.length; i++) {
        mapstr1.set(str1[i], (mapstr1.get(str1[i]) || 0) + 1);
    }
    for (let i = 0; i < str1.length; i++) {
        mapstr2.set(str2[i], (mapstr2.get(str2[i]) || 0) + 1);
    }
    if (MapsAreEqual(mapstr1, mapstr2)) {
        return true;
    }
    for (let i = str1.length; i < str2.length; i++) {
        let char_to_add = str2[i];
        let to_remove = str2[i - str1.length];
        mapstr2.set(char_to_add, (mapstr2.get(char_to_add, 0) || 0) + 1);
        if (mapstr2.get(to_remove) === 1) {
            mapstr2.delete(to_remove);
        } else {
            mapstr2.set(to_remove, mapstr2.get(to_remove) - 1);
        }
        if (MapsAreEqual(mapstr1, mapstr2)) {
            return true;
        }
    }
    return false;
}
function MapsAreEqual(mapstr1, mapstr2) {
    if (mapstr1.size !== mapstr2.size) {
        return false;
    }
    for (let [key, value] of mapstr1) {
        if (mapstr2.get(key) !== value) {
            return false;
        }
    }
    return true;
}
let isPermutation = Find_Permutation("ab", "eidbaooo");
console.log(isPermutation);

//  Using Hashing

function Is_Permutation(str1, str2) {
    if (str1.length > str2.length) {
        return false;
    }
    let hashtable = new Array(26).fill(0);
    const getCharIndex = (char) => char.charCodeAt(0) - "a".charCodeAt(0);

    for (let char of str1) {
        hashtable[getCharIndex(char)]++;
    }

    for (let indx = 0; indx < str1.length; indx++) {
        hashtable[getCharIndex(str2[indx])]--;
    }

    if (hashtable.every((count) => count === 0)) {
        return true;
    }

    for (let indx = str1.length; indx < str2.length; indx++) {
        let toAdd = str2[indx];
        let toRemove = str2[indx - str1.length];

        hashtable[getCharIndex(toAdd)]--;
        hashtable[getCharIndex(toRemove)]++;
        if (hashtable.every((count) => count === 0)) {
            return true;
        }
    }
    return false;
}
let isPermutation1 = Is_Permutation("ab", "eidbaooo");
console.log(isPermutation1)