// dfs using recursion in-order
var dfs = function(root) {
    if(!root) return;
    dfs(root.left);
    console.log(root.val);
    dfs(root.right);
}

// pre-order dfs using stack

var dfs = function(root) {
    let stack = [];
    if(root) {
        stack.push(root);
    }
    while(stack.size) {
        while(root!=null) {
            root = root.left;
            stack.push(root.left);
        }
        root = stack[stack.length - 1];
        console.log(root.val);
        root = root.right;
    }

}