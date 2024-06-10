/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-10 04:04:00
 * @modify date 2024-06-10 04:04:00
 * @desc [description]
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    this.next = null;
}

var bfs = function(root) {
    if(!root) return;
    let q = [root];
    
    while(q.length) {
        let qs = q.length;
        for(let i = 0;i<qs;i++) {
            let top = q.shift();
            console.log(top);
            if(top.left) {
                q.push(top.left);
            }
            if(top.right) {
                q.push(top.right);
            }
        }
        if(q.length) console.log(null);

    }

    return root;
}
let ll = new TreeNode('ll',null,null);
let lr = new TreeNode('lr',null,null);
let left = new TreeNode('l',ll,lr);
let right = new TreeNode('right',null,null);
let root = new TreeNode('r', left, right);

bfs(root);