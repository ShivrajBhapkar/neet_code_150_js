// Apporoach 1
function group_anagram(strs) {
    const anagramGroups = {};
    for (let str of strs) {
        const sortedstr = str.split('').sort().join('');
        if (anagramGroups[sortedstr]) {
            anagramGroups[sortedstr].push(sortedstr);
        } else {
            anagramGroups[sortedstr] = [str];
        }
    }

    const result = Object.values(anagramGroups);
    return result;
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(group_anagram(strs));
console.log(group_anagrams(strs));

// Apporoach 2
function group_anagrams(strs) {
    const result = [];
    for (let i = 0; i < strs.length; i++) {
        const currentGroup = [strs[i]];
        for (let j = i + 1; j < strs.length; j++){
            if (!currentGroup.includes(strs[j]) && isAnagram(strs[i], strs[j])) {
                currentGroup.push(strs[j]);
            }
        }
        result.push(currentGroup);
    }
    return result;
}
function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}