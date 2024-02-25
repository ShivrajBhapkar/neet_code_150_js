// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

let str1 = "aab";
let str2 = "aba";

console.log(validate_anagrams2(str1, str2));
console.log(validate_anagrams(str1, str2));
// Apporoach 1
function validate_anagrams(str1, str2) {
    let hash = {};
    for (let char of str1) {
        hash[char] = (hash[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!hash[char] || hash[char] === 0) {
            return false;
        }
        hash[char]--;
    }

    return true;
}

// Apporoach 2
function validate_anagrams2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let hash = {};
    for (let char of str1) {
        hash[char] = (hash[char] || 0) + 1;
    }

    let hash1 = {};
    for (let char of str2) {
        hash1[char] = (hash1[char] || 0) + 1;
    }

    for (let i in str1) {
        if (hash[str1[i]] !== hash1[str1[i]]) {
            return false;
        }
    }

    return true;
}
