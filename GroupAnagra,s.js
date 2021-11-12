// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]
// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

//Pseudocode
//check if each element in an array is annagram or not


// if anagram group them in one array 
//else store it in the array 

function groupAnagrams(strs) {

    const hash = {}
    for(let i = 0 ; i < strs.length ; i++){
   let anagram =  strs[i].split('').sort().join('') 
        if(!hash[anagram]) {
            hash[anagram] = [strs[i]]
        } else {
            hash[anagram].push(strs[i])
        }
       
    }
    
    return Object.values(hash)
};

//test cases
console.log(groupAnagram([["bat"],["nat","tan"],["ate","eat","tea"]]))