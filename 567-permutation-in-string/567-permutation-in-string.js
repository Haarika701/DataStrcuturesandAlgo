/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 
Time complexity: O(n) - Where n is the size of s2 (s1 can only be equal or less than s2).
Space complexity: O(1) - Our hashmap will have 26 objects at most bacause the question 
	states that s1 consist of only lowercase english letters. 
 */
var checkInclusion = function(pattern, str) {
  // if the permutation's length is bigger than the string's length we can now return false because it's invalid
  if(str.length < pattern.length) return false;

  let charsInPattern = new Map();

  // create a count chars map for the pattern
  for(let i = 0; i < pattern.length; i++) {
    let curCharCount = charsInPattern.get(pattern.charAt(i)) || 0;
    charsInPattern.set(pattern.charAt(i), curCharCount + 1);
  }
  
  // make a copy of the pattern's char count map so that we can decrease 
  // the chars we are finding from it, and not effect the original patten's char count map
  let charsInPatternCopy = new Map(charsInPattern);
  let windowStart = 0;
  let windowEnd = 0;

  // run on the string and check if the string contains the premutation of the pattern
  while(windowEnd < str.length) {

    // check if the current char is in our pattern's chars count map
    if(charsInPatternCopy.has(str[windowEnd])) {
      // get the count in the pattern's count map of the current char from the string
      let curCharCount = charsInPatternCopy.get(str[windowEnd]);
      
      // decrease the char count from our copyied pattern's chars count map
      if(curCharCount === 1) {
        // delete from copy map
        charsInPatternCopy.delete(str[windowEnd]);
      } else {
        // decrease count
        charsInPatternCopy.set(str[windowEnd], curCharCount - 1);
      }
        
      // we found a permutation of the pattern, if we can say that we came across all the required chars in the map
      // because we made a copy and removed each char of the pattern that we came across in the string, if the
      //  size of the copied map is zero, that means all the chars in the pattern are in the string consecutively
      //  so we can simply retrun true
      if(charsInPatternCopy.size === 0) return true;
        
      windowEnd++;
    } else {
      // if the current char is not in our map (meaning not in the pattern), then we need to
      // initialise the copied map and shrink our window and start the check again
      charsInPatternCopy = new Map(charsInPattern);

      // shrink the window
      windowStart++;
        
      // start the window again (bacause the for loop will add )
      windowEnd = windowStart;
    }
  }

  // if we reached here that means s1's permutations is not a substring of s2
  return false;
};