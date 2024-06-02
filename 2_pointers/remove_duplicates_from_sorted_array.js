/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-01 15:38:49
 * @modify date 2024-06-01 15:38:49
 * @desc [description]
 */


// URL - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0;
    let fast = 0;
    while(fast < nums.length) {
        if(nums[slow] == nums[fast]) {
            fast++;
        } else {
            slow++
            nums[slow] = nums[fast];
            fast++;
        }
    }
    return slow+1;
};

