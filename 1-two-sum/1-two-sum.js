/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
      let m = new Map();

    for(let i= 0 ;i< numbers.length; i++){
        if(m.has(target-numbers[i])) {
            return [m.get(target-numbers[i]), i];
        }
        m.set(numbers[i], i);

    }
    
};


    
    