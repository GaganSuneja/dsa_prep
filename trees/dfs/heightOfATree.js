/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-10 19:12:05
 * @modify date 2024-06-10 19:12:05
 * @desc [description]
 */


// URL - https://leetcode.com/problems/maximum-depth-of-binary-tree/ 


var maxDepth = function(root) {

    if(!root) return 0;

    let depth = Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
    return depth;
    
};


