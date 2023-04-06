/*  *****
Challenge:  234. Palindrome Linked List

Instructions:  

                                MySolution

                var isPalindrome = function(head) {
                    let str = '';

                    while (head){
                        str += head.val;
                        head = head.next;
                    }

                    return str === str.split('').reverse().join('')
                };

*/