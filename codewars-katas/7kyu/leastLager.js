
/*  *****
Challenge: 7kyu Least Larger

Instructions: Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

                                       MY Solution
                   function leastLarger(a,i) {
                        if (Math.max(...a) === a[i]){
                            return -1
                        }else{
                            let ans = a.filter((num, index) => num > a[i]).sort((a, b) => a - b)
                            return a.indexOf(ans[0])
                        }
                    }

                                       CodeWars Solution(s)
        function leastLarger(a,i) {
            let arr = a.filter((item) => item > a[i]).sort((a, b) => a - b);
            return a.lastIndexOf(arr[0]);
        }
       
*/

