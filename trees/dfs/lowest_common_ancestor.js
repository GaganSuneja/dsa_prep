/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-04 21:44:52
 * @modify date 2024-06-04 21:44:52
 * @desc [description]
 */

// URL - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if((p.val >= root.val) && (root.val >= q.val)) {
        return root;
    }

    if((p.val <= root.val) && (root.val <= q.val)) {
        return root;
    }

    if(p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else if(p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

};


const root = new TreeNode(6);
root.left = new TreeNode(4);
root.right = new TreeNode(8);


