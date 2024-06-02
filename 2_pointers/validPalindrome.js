/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-01 03:42:49
 * @modify date 2024-06-01 03:42:49
 * @desc [description]
 */

// URL https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s  = s.trim().split('').reduce((acc, char) => {
        char = char.toLowerCase();
        if(char >= 'a' && char <='z' || char >= '0' && char <= '9') {
            acc+=char;
        }
        return acc;
    }, '');
    let i = 0;
    let j = s.length-1;   
    while(i <= j && s[i] == s[j]) {
        i++;
        j--;
    }

    return s.length % 2 == 0 ? (i == j + 1) : (i == j + 2);
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));