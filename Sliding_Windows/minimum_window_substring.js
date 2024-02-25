// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.



var minWindow = function (s, t) {
    const isMissingArgs = !s.length || !t.length;
    if (isMissingArgs) return '';

    const frequencyMap = getFrequencyMap(t);
    const { start, end } = getWindowPointers(s, t, frequencyMap);

    return getSubString(s, start, end);
};

const getFrequencyMap = (str, frequencyMap = new Map()) => {
    for (const char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    return frequencyMap;
};

const getWindowPointers = (s, t, frequencyMap) => {
    let [left, right, matched, start, end] = [0, 0, 0, 0, s.length + 1];

    while (right < s.length) {
        matched = addRightFrequency(s, right, frequencyMap, matched);

        const canSlide = () => matched === t.length;
        while (canSlide()) {
            const window = right - left + 1;

            const isSmaller = window < end;
            if (isSmaller) {
                [start, end] = [left, window];
            }

            matched = subtractLeftFrequency(s, left, frequencyMap, matched);
            left++;
        }

        right++;
    }

    return { start, end };
};

const addRightFrequency = (s, right, frequencyMap, matched) => {
    const char = s[right];

    if (frequencyMap.has(char)) {
        frequencyMap.set(char, frequencyMap.get(char) - 1);

        const isInWindow = 0 <= frequencyMap.get(char);
        if (isInWindow) matched++;
    }

    return matched;
};

const subtractLeftFrequency = (s, left, frequencyMap, matched) => {
    const char = s[left];

    if (frequencyMap.has(char)) {
        const isOutOfWindow = frequencyMap.get(char) === 0;
        if (isOutOfWindow) matched--;

        frequencyMap.set(char, frequencyMap.get(char) + 1);
    }

    return matched;
};

const getSubString = (s, start, end) =>
    end <= s.length ? s.slice(start, start + end) : '';

const min = minWindow("ADOBECODEBANC", "ABC");
console.log(min);