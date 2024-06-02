/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-05-31 14:23:45
 * @modify date 2024-05-31 14:23:45
 * @desc [description]
 */


// url - https://leetcode.com/problems/longest-palindromic-substring/

// ex - sequences - abba abc bbcca

//  babxyz

// Divide and conquer along with 2 pointer approach

// length constraints

// length == 1 -> output input.charAt(0);
// length = odd -> ex abcab - > start -> Math.ceil(length/2), end -> Math.ceil(length/2)
// length = even -> ex abbbba -> start -> length/2 , end -> length/2 + 1

// maintain outputs from inner inputs 

// contion i < j

// returning -> get start and end index and then return that string

// false cases
// babxyz
// non matching 

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) {
        return s[0];
    }
    let string1 = '';
    let string2 = '';
    let finalString = ''
    let result = '';
    for(let i=0; i<s.length; i++){
        string1 = getPalindrome(i,i,s);
        string2 = getPalindrome(i,i+1,s);

        finalString  = (string1.length > string2.length) ? string1 : string2;
        result = finalString.length > result.length ? finalString : result;
    }
    return result;
};

var getPalindrome = function (start, end, s) {
    let i = start;
    let j = end;

    while(i >= 0 && j < s.length) {
        if(s[i] !== s[j]) break;
        i--;
        j++;
    }

    return s.substring(i+1, j);
}


console.log(longestPalindrome('aa'));


