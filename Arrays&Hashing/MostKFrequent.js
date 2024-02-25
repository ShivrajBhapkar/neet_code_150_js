function KFrequent(nums , k) {
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

   const sortedElements = Array.from(frequencyMap.keys()).sort((a, b) => {
       const frequencyComparison = frequencyMap.get(b) - frequencyMap.get(a);
       if (frequencyComparison !== 0) {
           return frequencyComparison; // Sort by frequency in descending order
       } else {
           return b-a; // If frequencies are the same, sort by value in descending order
       }
   });

   return sortedElements.slice(0, k);
}

console.log(KFrequent([1, 1, 2, 2, 3, 3, 3], 2));