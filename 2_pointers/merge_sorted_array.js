/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-01 13:54:18
 * @modify date 2024-06-01 13:54:18
 * @desc [description]
 */

// URL - https://leetcode.com/problems/merge-sorted-array/


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let i = m - 1;
    let j = m + n - 1;
    let k = n - 1;

    while(i >= 0 && k >= 0) {
        if(nums1[i] >= nums2[k]) {
            nums1[j] = nums1[i];
            i--;
        } else {
            nums1[j] = nums2[k];
            k--;
        }
        j--;
    }

    while(k >= 0) {
        nums1[j] = nums2[k];
        k--;
        j--;
    }
    

    return nums1;
};