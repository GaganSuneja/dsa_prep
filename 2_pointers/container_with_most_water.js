/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-01 20:24:30
 * @modify date 2024-06-01 20:24:30
 * @desc [description]
 */

// URL - https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let start = 0;
    let end = height.length - 1;
    if(end == 1) {
        return Math.min(height[start], height[end]);
    }
    while (start < end) {
        
        let area = Math.min(height[start], height[end]) * (end - start);
        if(area > maxArea) {
            maxArea = area;
        }

        if(height[end] < height[start]) {
            end--;
        } else if (height[end] > height[start]) {
            start++;
        } else {
            start++;
            end--;
        }

    }           

    return maxArea;
};

console.log(maxArea([0,0,1]));