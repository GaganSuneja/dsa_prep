/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-01 19:41:22
 * @modify date 2024-06-01 19:41:22
 * @desc [description]
 */

// URL - https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(s) {
    let zeroP = 0;
    let twoP = s.length - 1;
    let i = 0;
    while(i <= twoP){
        if(s[i] == 2) {
            [s[i],s[twoP]] = [s[twoP], s[i]];
            twoP--;
            continue;
        } else if (s[i] == 0) {
            [s[i],s[zeroP]] = [s[zeroP], s[i]];
            zeroP++;
        }
        i++;
    }
    return s;
}

console.log(sortColors([2,0,2,0,1,0,1]));
console.log(sortColors([1,0,2]));
console.log(sortColors([0,2,1]));
console.log(sortColors([1,2,0]));

