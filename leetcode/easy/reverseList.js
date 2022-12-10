/*  *****
Challenge: 206. Reverse Linked List

Instructions: 
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]


                                MY Solution
                var reverseList = function(head) {
                    let prev = null;
                    let curr = head;

                    while(curr){
                        let next = curr.next;
                        curr.next = prev;
                        prev = curr;
                        curr = next;
                    }

                    head = prev;
                    return head;
                };


                // ES6 solution

         var reverseList = function(head) {
            let [prev, current] = [null, head]
            while(current) {
                [current.next, prev, current] = [prev, current, current.next]
            }
            return prev
        }
               
*/