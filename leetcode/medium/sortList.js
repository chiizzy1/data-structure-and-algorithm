
/*  *****
Challenge: Medium  148. Sort List

Instructions:  Given the head of a linked list, return the list after sorting it in ascending order.

Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []

                                    MY Solution
                        
                class Node{
        constructor(val, next = null){
                    this.val  = val;
                    this.next = next;
                }
        }

        var sortNodes = function(head) {
            let arr = [];
            while(head){
                arr.push(head.val);
                head = head.next;
            }
            // sort arr in descending order
            return arr.sort((a,b) => b - a);
        };

        var sortList = function(head) {
            if (!head) return null;
            let allNodes = sortNodes(head);
            let result
            for(let i = 0; i < allNodes.length; i++){
                // we start at the last node which points to null (initially result is null)
                // every other node points to the previous node until we get to the head node
                result = new Node(allNodes[i], result)
            }
            return result
        };
                            
*/



