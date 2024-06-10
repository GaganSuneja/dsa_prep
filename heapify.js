var poll = function(arr) {
    let minValue = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    heapifySingleNode(0,arr);
    return minValue;
}


var heapify = function() {

    let arr = [10,20,0,1,2,4];
    //minHeap

    // leftchild = 2i+1;
    // rightChild = 2i+2

    // i-1/2
    let i = Math.floor((arr.length-1-1) / 2);

    while(i>=0) { // should run till 0 index hence >=
        heapifySingleNode(i,arr)
        --i;
    }
    return arr;
}

var heapifySingleNode = function(i,arr) {
    
    let leftChild = 2*i + 1;
    let rightChild = 2*i + 2;
    n = arr.length;
   
    if(rightChild < n) {
        if(arr[rightChild] < arr[i] && arr[rightChild] < arr[leftChild]) {
            swap(rightChild,i,arr);
            heapifySingleNode(rightChild,arr);
        }
    }
    if(leftChild < n) {
        if(arr[leftChild] < arr[i] && arr[leftChild] < arr[rightChild]) {
            swap(leftChild,i,arr);
            heapifySingleNode(leftChild,arr);
        }
    }
    return;
   
    // if(leftChild < n && arr[leftChild] < arr[minChildIndex]) {
    //     minChildIndex = leftChild;
    // } 
    // if(rightChild < n && arr[rightChild] < arr[minChildIndex]) {
    //     minChildIndex = rightChild;
    // } 
    // if(minChildIndex == i) {
    //     return;
    // } else {
    //     swap(minChildIndex,i,arr);
    //     heapifySingleNode(minChildIndex,arr);
    // }

}

var swap = function (i,j,arr) {
   [arr[i], arr[j]] = [arr[j],arr[i]]

}

let arr = heapify();
while(arr.length) {
    console.log(poll(arr));
}
