/*  *****
Challenge: 7kyu  Two Oldest Ages

Instructions: 
[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]


                                    MySolution
            // return the two oldest/oldest ages within the array of ages passed in.
            function twoOldestAges(ages){
                ages = ages.sort((a,b) => a - b)
                
                return ages.slice(-2)
            }


*/