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
 * @return {number}
 */
var goodNodes = function(root) {
    return dfs(root, Number.NEGATIVE_INFINITY, 0);    
};

var dfs = function (root, maxValue, count) {
    if(!root) {
        return 0;
    }
    if(root.value >= maxValue) {
        count++;
        maxValue = root.value;
    }
    return count + dfs(root.left, maxValue, 0) + dfs(root.right, maxValue, 0);
}