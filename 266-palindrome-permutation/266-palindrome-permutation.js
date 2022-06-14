/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let map = new Map();
    let numOdd = 0;
    for (let i = 0, sLength = s.length; i < sLength; i++) {
        let char = s[i];
        map.set(char, (map.get(char) || 0) + 1 );
    }
    
    for (let count of map.values()) {
        if (count % 2 !== 0) {
            if (numOdd > 0) {
                return false;
            } else {
                numOdd++;
            }
        }
    }
    return true;
};