var reverse = function() {
    let C = {
        val: 'C',
        next: null,
    }
    let B = {
        val: 'B',
        next: C,
    }
    let A = {
        val: 'A',
        next: B,
    }

    let node = A;
    let stack = [];
    while(node.next) {
        stack.push(node);
        node = node.next;
    }
    stack.push(node);
    let root  = stack.pop();
    node = root;
    for(let i = stack.size;stack.length!=0;i--){
        node.next = stack.pop();
        node = node.next;
    }
    node.next = null;
    return root;
}

reverse();