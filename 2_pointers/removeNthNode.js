/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-11 14:24:06
 * @modify date 2024-06-11 14:24:06
 * @desc [description]
 */


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromStart = function(head, n) {
    let count = 1;
    let dummy = new ListNode(-1, null);
    dummy.next = head;
    let prev = dummy;
    let pointerNode = head;
    while(pointerNode != null && count < n) {
        pointerNode = pointerNode.next;
        prev = prev.next;
        count++;
    }
    prev.next = pointerNode.next;
    
    return dummy.next;
};

// 10->11->12->13->14
// 0   1   2   3   4

// head.next = 11
// dummy.next = head;
// prev = dummy
// pointer = head;
// head = 10


// iteration start
// 1. count = 1 pointer = 11, prev = 10, count = 1, n = 3
// 2. count = 2 pointer = 12, prev = 11, count = 2 , n = 3
// 3. count = 3 pointer = 13, prev = 12, count = 3, n = 3

// 4. count = 3 exit

// pointer = 12
// prev = 11

// nthFromStart that too wrong.
// we'll have to start from count = 1 if n is 1 than we have to remove first node
// and hence we need to remove 1st node



