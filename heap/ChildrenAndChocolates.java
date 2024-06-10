package dsa_prep.heap;

import java.util.Collections;
import java.util.PriorityQueue;

public class ChildrenAndChocolates {
    public static void main(String[] args) {
        SoltionForChocs s = new SoltionForChocs();
        int sum = s.nchoc(3, new int[] { 6, 5 });
        System.out.println(sum);
    }
}

class SoltionForChocs {
    public int nchoc(int A, int[] a) {
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>(Collections.reverseOrder());
        for (int i = 0; i < a.length; i++) {
            pq.add(a[i]);
        }
        int sum = 0;
        int pow = (int) (Math.pow(10, 9) + 7);
        while (A != 0) {
            int maxChoc = pq.peek();
            pq.poll();
            sum = (sum + (maxChoc % pow)) % pow;
            pq.add((int) (maxChoc / 2));
            A--;
        }

        return sum;
    }
}
