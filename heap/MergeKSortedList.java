package dsa_prep.heap;

import java.util.ArrayList;
import java.util.PriorityQueue;

public class MergeKSortedList {
    public static void main(String[] args) {
        MergeKSortedListSolution s = new MergeKSortedListSolution();
        s.mergeKLists(new ArrayList<>())
    }
}

class MergeKSortedListSolution {
    public ListNode mergeKLists(ArrayList<ListNode> a) {
        PriorityQueue<ListNode> pq = new PriorityQueue<>((node1, node2) -> node1.val - node2.val);
        for (ListNode node : a) {
            pq.add(node);
        }
        ListNode dummy = new ListNode(0);
        ListNode current = pq.poll();
        dummy.next = current;
        while (!pq.isEmpty()) {
            if (current.next != null) {
                pq.add(current.next);
            }
            ListNode top = pq.poll();
            current.next = top;
            current = current.next;
        }

        return dummy.next;

    }
}

// 1->2->3
// 5->6->7
// 8->9->10

// heap
// 1 5 8

// top = 1
// current.next = 1
// current

class ListNode {
    public int val;
    public ListNode next;

    ListNode(int x) {
        val = x;
        next = null;
    }
}
