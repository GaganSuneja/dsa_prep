/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-04 21:44:12
 * @modify date 2024-06-04 21:44:12
 * @desc [description]
 */

// URL - https://leetcode.com/problems/binary-tree-maximum-path-sum/
function maxPathSum(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;
  
    function dfs(node) {
      if (!node) return 0;
      let left = Math.max(0, dfs(node.left));
      let right = Math.max(0, dfs(node.right));
      maxSum = Math.max(maxSum, left + right + node.val);
      return Math.max(left, right) + node.val;
    }
  
    dfs(root);
  
    return maxSum;
}