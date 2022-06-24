/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 brute force time complexity - o(n)
 both existing solutions do not make use of the property that the input array is sorted. 

    
    var twoSum = function(numbers, target) {
        let m = new Map();

    for(let i=0 ;i<numbers.length; i++){
        if(m.has(target-numbers[i])) {
            return [m.get(target-numbers[i]), i+1];
        }
        m.set(numbers[i], i+1);

    }
}
  */ 

     var twoSum = function(numbers, target) {
         let left = 0 ;
         let right = numbers.length -1;
         while(left <= right){
             let sum = numbers[left] + numbers[right]
             if(sum == target){
                 return [left +1,right+1]
             }else if(sum < target){  left += 1
                 
             }else{
                 right -= 1
             }
         }
         
     }