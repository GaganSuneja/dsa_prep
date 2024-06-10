/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-10 03:16:36
 * @modify date 2024-06-10 03:16:36
 * @desc [description]
 */

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
     this.next = null;
 }

 var connectNext = function(root) {
    if(!root) return;
    let level = 0;
    
 }

 var connect = function(left, right) {
    left.next = right;
 }
 connectNext(new TreeNode(2,null,null));