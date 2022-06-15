/**
 * @param {string} s
 * @return {string[]}
 check if palindromic permutation is possible for s.
    if yes, then generate permutations using hashmap which stores the no of occurences of each character.
if the occurences exceeds1, it indicates that no palndromic permutation is possible for s. 

generate half of the palindromic string and append its reverse string to itself to generate full length palindromic string.

 */
var generatePalindromes = function(s) {
 if(s.length === 1){
     return [s];
 }
    
    //record the number of each char
    let map = {};
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] in map){
            map[s[i]] += 1;
        }else{
            map[s[i]] = 1
        }
    }
    
    //for string like aaabbbc, the middle char is c, left part is a permuttion of two a and b
//if we have more than 1 odd number of chars, we cannot form a palindrome
    
    let keys = Object.keys(map);
    let oddKey = "";
    let oddCount = 0;
    
    //in the loop, we half the char count and also calculate how many odd number of chars we have
//if we habe more than one odd number of chars, we canoot form a palindome
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (map[key] % 2 !== 0) {
      oddKey = key;
      oddCount += 1;
      if (map[key] === 1) {
        delete map[key];
      } else {
        map[key] = (map[key] - 1) / 2;
      }
    } else {
      map[key] = map[key] / 2;
    }
  }

  if (oddCount > 1) {
    return [];
  }
  // reverse the left part to get right part
  function reverse(s1) {
    let result = "";
    for (let i = s1.length - 1; i >= 0; i -= 1) {
      result += s1[i];
    }
    return result;
  }
  let results = [];
  keys = Object.keys(map);
  let stack = [];
  let count = (s.length - oddCount) / 2;
  // backtracking
  function bc() {
    if (stack.length === count) {
      let stackString = stack.join("");
      let result = stackString + oddKey + reverse(stackString);
      results.push(result);
      return;
    }
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (map[key] > 0) {
        stack.push(key);
        map[key] -= 1;
        bc();
        map[key] += 1;
        stack.pop();
      }
    }
  }
  bc();
  return results;
};