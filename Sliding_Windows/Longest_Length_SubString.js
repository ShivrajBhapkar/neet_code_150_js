// Medium

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function Longest_SubString_Without_Repetation(str) {
    let start = 0;
    let maxLength = 0;
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            start = Math.max(start, map.get(str[i]) + 1);
        }
        map.set(str[i], i);
        maxLength = Math.max(maxLength, i - start+1);
    }
    return maxLength;
}

console.log(Longest_SubString_Without_Repetation("abcabcbb"));