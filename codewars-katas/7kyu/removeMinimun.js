/*  *****
Challenge: 7 kyu Remove the minimum


Instructions:  Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]


                                    MySolution
               function removeSmallest(numbers) {
                    let smallest = numbers[0];
                    let index = 0;
                    
                    for (let i = 1; i < numbers.length; i++){
                        if (numbers[i] < smallest){
                        smallest = numbers[i];
                        index = i
                        }
                    }
                    return numbers.filter((a,i) => i !== index)
                }
*/