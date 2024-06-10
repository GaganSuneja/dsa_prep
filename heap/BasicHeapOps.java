/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-07 17:32:18
 * @modify date 2024-06-07 17:32:18
 * @desc [description]
 */

// URL - https://www.interviewbit.com/problems/magician-and-chocolates/
package dsa_prep.heap;

import java.util.PriorityQueue;

public class BasicHeapOps {

    /**
     * @param args
     */
    public static void main(String[] args) {
        Solution s = new Solution();
        s.solve(new int[] { 5, 4, 10, 2, 12, 11, 20, 25 });
    }

}

class Solution {
    public void solve(int[] A) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int i = 0; i < A.length; i++) {
            // add elements
            pq.add(A[i]);
        }
        // peek from heap
        System.out.println(pq);
        int minElem = pq.peek();
        System.out.println(minElem);
        // poll the heap
        pq.poll();
        System.out.println(pq);
        // get size of heap
        System.out.println(pq.size());
        // clear the heap
        pq.clear();
        System.out.println(pq);

    }
}