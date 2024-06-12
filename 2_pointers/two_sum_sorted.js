/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-01 04:17:49
 * @modify date 2024-06-01 04:17:49
 * @desc [description]
 */


// URL - https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/



/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


// Hints
// 1. Ascending order
// 2. i < j 
// 3. constant extra space means no additonal array or a n-map
// 4. RETURN in index as i+1,j+1;
// 5. both the elements should not be same so check before adding such that 
var twoSum = function(numbers, target) {
    
    let i = 0; let j = numbers.length-1

    while(i < j) {
       let sum = numbers[i] + numbers[j];
       if(sum > target) {
        j--;
       } else if(sum < target) {
        i++;
       } else {
        return [i+1,j+1];
       }
        
    }
    
};





// 2 sum practice again
var ts = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start < end) {
        let sum = nums[start] + nums[end];
        if( sum > target) {
            end-=1;
        } else if(sum < target) {
            start+=1
        } else {
            return [i+1,j+1];
        }
    }
}