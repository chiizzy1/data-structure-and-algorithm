/*  *****
Challenge: 6 kyu
Find the missing term in an Arithmetic Progression

Instructions: An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7

                                       MY Solution

                                       function findMissing(array){
                                        let arr = array
                                        let start = arr[0]
                                        let all = [start]
                                        let a = 0
                                        // get A.P 
                                        for (let i = 1 ; i <= arr.length; i++){
                                            if (   arr[i] - arr[i - 1] === arr[ i + 1 ] - arr[i] ) { 
                                              a = arr[i] - arr[i - 1]
                                              
                                            }else{ a = arr[arr.length - 1] - arr[arr.length - 2] }
                                        }
                                    
                                        // get array of the complete sequence
                                    
                                        for (let i = 1 ; i <= arr.length; i++){
                                            all.push( all[i-1] + a) 
                                        }
                                    
                                        // return missing term
                                    
                                        return all.filter(num => arr.indexOf(num) === -1 )[0]
                                    }
                   

                                       CodeWars Solution(s)

                

*/