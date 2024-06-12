/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-11 14:48:29
 * @modify date 2024-06-11 14:48:29
 * @desc [description]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// URL - https://leetcode.com/problems/remove-nth-node-from-end-of-list/


// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   let dummy = new ListNode(-1, null);
   let count = 1;
   dummy.next = head;
   let prev = dummy;
   let start = head;
   let end = head;

   
   // move end pointer n places ahead;
   while(count <= n && end) {
    end = end.next;
    count+=1;
   }

   while(end != null) {
    end = end.next;
    prev = prev.next;
    start = start.next;
   }

   prev.next = start.next;
   return dummy.next;

};
const E = new ListNode('E', null);
const D = new ListNode('D', E);
const C = new ListNode('C', D);
const B = new ListNode('B', C);
const root = new ListNode('A', B);

console.log(JSON.stringify(removeNthFromEnd(root, 2)));