function FindGroupingPossible(cards, grp_size) {
    if (cards.length % grp_size !== 0) {
        return false;
    }
    const map = new Map();
    for (let indx = 0; indx < cards.length; indx++) {
        map.set(cards[indx], (map.get(cards[indx]) || 0) + 1);
    }
    for (let indx = 0; indx < cards.length; indx++) {
        if (map.get(cards[indx]) > 0) {
            for (let i = 0; i < grp_size; i++) {
                let nextCard = cards[indx] + i;
                if (!map.has(nextCard) || map.get(nextCard) <= 0) {
                    return false;
                }
                map.set(nextCard, map.get(nextCard) - 1);
            }
        }
    }
    return true;
}
const result = FindGroupingPossible([1, 2, 3, 6, 2, 3, 4, 7, 8], 3);
console.log(result);
