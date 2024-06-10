/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-01 21:55:00
 * @modify date 2024-06-01 21:55:00
 * @desc [description]
 */

// URL - https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = start+1;
    // Base case ex -> s = 'a';
    
    const uniqueMap = new Map();
    if(s.length == 0) return 0;
    uniqueMap.set(s[start], true);
    let global_max = uniqueMap.size;

    while(end < s.length) {
        if(!uniqueMap.has(s[end])) {
            uniqueMap.set(s[end], true);
            end++;
        } else {
            global_max = Math.max(uniqueMap.size, global_max);
            while(s[start]!=s[end]) {
                uniqueMap.delete(s[start]);
                start++;
            }
            uniqueMap.delete(start);
            start++;
            uniqueMap.set(s[end], true);
            end++;
        }

    }
    return Math.max(uniqueMap.size, global_max);
};

console.log(lengthOfLongestSubstring('qrsvbspk'));
