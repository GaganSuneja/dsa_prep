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

    let current = A;
    if(!current.next) {
        console.log(current);
        return current;
    }
    
    let next = current.next;
    current.next = null;
    temp = next.next;
    
    while(next) {
        next.next = current;
        current = next;
        next = temp;
        if(temp) {
            temp = temp.next;
        }
    }

    console.log(current);

}

var E = {
    val: 'E',
    next: null,
} 
var D = {
    val: 'D',
    next: E,
} 
var C = {
    val: 'C',
    next: D,
}
var B = {
    val: 'B',
    next: C,
}
var A = {
    val: 'A',
    next: B,
}
var reverseBetter = function(i,j){
    if(i == j) return A;

    let count = 0;
    let prev = null;
    let current = A;
    let next = null;
    
    while(count < i) {
        prev = current;
        current = current.next;
        count++;
    }
    // 1->2->3->null
    // 2->1->3->null

    let head = prev;
    // prev -> 1
    // current -> 2
    // count -> 1
    // head->1
    while(current && count < j) {
        next = current.next;  // next -> 3, 
        current.next = prev; // 2 -> 1, 
        prev = current; // prev -> 2
        current = next; // current -> 3
        count++; // c = 2; 
    }
    
   console.log()

   //1->2->3->4->5
   //1->2<-3<-4 5->null
   // prev=4
   // current=5
}

reverseBetter(1,2);

// 1->2->3->4->5

// 1,2

// 2->1->3->4->5

