/*  *****
Challenge: 232. Implement Queue using Stacks

Instructions: Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false



                                MY Solution
            var MyQueue = function() {
                this.pushStack = []
                this.popStack = []
            };


            MyQueue.prototype.push = function(x) {
                this.pushStack.push(x)
            };


            MyQueue.prototype.transfer = function (){
                while (this.pushStack.length > 0){
                    this.popStack.push( this.pushStack.pop() )
                }
            }


            MyQueue.prototype.pop = function() {
                if (this.empty()){
                    return null
                }
                
                if (this.popStack.length === 0){
                    this.transfer()
                }

                return this.popStack.pop();
            };


            MyQueue.prototype.peek = function() {
                if (this.empty()){
                    return null
                }
                
                if (this.popStack.length === 0){
                    this.transfer()
                }
                
                return this.popStack[this.popStack.length - 1]
            };


            MyQueue.prototype.empty = function() {
                return this.pushStack.length === 0 && this.popStack.length === 0
            };
                                
};

*/


 

