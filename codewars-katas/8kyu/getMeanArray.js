/*  *****
Challenge: 8kyu Get the mean of an array

Instructions:  It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.


                                    MySolution
         
                 function getAverage(marks){
                    let total = marks.reduce((acc, val) => acc + val, 0)
                    return Math.floor( total / marks.length )
                }
*/