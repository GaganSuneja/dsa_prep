/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-12 03:11:41
 * @modify date 2024-06-12 03:11:41
 * @desc [description]
 */

// URL - https://leetcode.com/problems/odd-even-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var oddEvenList = function(head) {
    if(!head || !head.next) return head;

    let dummy = new ListNode(-1);
    dummy.next = head;
    let current = head;
    let next = head.next;
    let prev = dummy;
    let evenStart = head.next;
    let count = 1;
    while(next) {
        current.next = next.next;
        prev = current;
        current = next;
        next = next.next;
        count+=1;
    }
    if(count & 1) {
        // odd elements
        current.next = evenStart;
    } else {
        // prev elements
        prev.next = evenStart;
    }
    return dummy.next;
};

// [1,2,3]
// // Iterations next = 2, prev = dummy, current = 1, count = 1, evenStart = 2
// // 1. 1.next = 3, prev = 1, current = 2, next = 3 count = 2
// // 2. 2.next = 4, prev = 2, current = 3, next = 4, count = 3
// // 3. 3.next = null, prev =3, current = 4, next = null, count = 4

// 1->3 2-null
// current.next = 2
// 1->3->2->null

// 1-3->2->4

