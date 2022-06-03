/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 
 //search through the array
 //maintain the frequency
 //
 */
var intersect = function(nums1, nums2) {
    const results = []
    nums1.map(item => {
        if(nums2.includes(item)){
            results.push(item)
            nums2.splice(nums2.indexOf(item),1)
        }
    })
    return results
};