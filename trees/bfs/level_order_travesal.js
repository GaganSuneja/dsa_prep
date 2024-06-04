const { Queue } = require('../Queue');


var levelOrder = function(root) {
    let node = null
    const queue = new Queue();
    queue.enqueue(root);
    let outerArray = [];
    let innerArray = [];
    while(!queue.isEmpty()) {
        node = queue.dequeue();
        if(node) {
            innerArray.push(node.val);
        }
    }
    return outerArray;

};  