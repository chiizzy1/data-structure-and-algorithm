/*  *****
Challenge: 21. Merge Two Sorted Lists

Instructions: You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]



                                MY Solution

                var mergeTwoLists = function(list1, list2) {
                    if(list1 === null){
                        return list2
                    }
                    if(list2 === null){
                        return list1
                    }

                    let headNode = new ListNode(null);
                    let nextNode = headNode;

                    while(list1 !== null && list2 !== null){
                        if (list1.val <= list2.val){
                            nextNode.next = list1
                            list1 = list1.next;
                        }else{
                            nextNode.next = list2
                            list2 = list2.next;
                        }

                        nextNode = nextNode.next;
                    }

                    if (list1 !== null){
                        nextNode.next = list1;
                    }
                    if (list2 !== null){
                        nextNode.next = list2;
                    }

                    return headNode.next;
                };                

*/


 

