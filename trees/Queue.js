function Queue() {
    this.items = [];
    this.start = 0;
    this.end = 0;

    this.front = function() {
        if(!this.isEmpty()) {
            return this.items[this.start];
        }
    }

    this.enqueue = function(element) {
        this.items.push(element);
        this.end++;
    }

    this.dequeue = function() {
        const item = this.items[this.start];
        if(this.start < this.end) {
            this.start++;
        }
        return item;
        this.items.shift()
    }

    this.size = function() {
        return this.end - this.start;
    }

    this.isEmpty = function() {
        return this.size() == 0;
    }

    this.printQueue = function() {
        for(let i = this.start; i < this.end; i++) {
            console.log(this.items[i]);
        }
    }
}

module.exports = {
    Queue,
}