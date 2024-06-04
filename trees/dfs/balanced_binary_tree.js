/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-04 14:26:19
 * @modify date 2024-06-04 14:26:19
 * @desc [description]
 */

// URL - https://leetcode.com/problems/balanced-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) {
        return true;
    }
    return Math.abs(height(root.left) - height(root.right)) > 1
           ? false
           : isBalanced(root.left) && isBalanced(root.right);
}

var height = function(node) {
    if(!node) {
        return 0;
    }
    return 1 + Math.max(height(node.left), height(node.right));
}

