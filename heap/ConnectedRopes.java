package dsa_prep.heap;

import java.util.PriorityQueue;

public class ConnectedRopes {
    public static void main(String[] args) {
        SoltionForConnectedRopes s = new SoltionForConnectedRopes();
        int sum = s.solve(new int[] { 1, 2, 3, 4, 5 });
        System.out.println("sum " + sum);
    }
}

class SoltionForConnectedRopes {
    public int solve(int[] A) {
        int sum = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int i = 0; i < A.length; i++) {
            pq.add(A[i]);
        }
        while (!pq.isEmpty()) {
            int ropeLength = pq.peek();
            pq.poll();
            if (pq.peek() != null) {
                ropeLength += pq.peek();
                pq.poll();
                pq.add(ropeLength);
                sum += ropeLength;
            }
        }
        return sum;
    }
}
