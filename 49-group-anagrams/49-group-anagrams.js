/**
 * @param {string[]} strs
 * @return {string[][]}
 */
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