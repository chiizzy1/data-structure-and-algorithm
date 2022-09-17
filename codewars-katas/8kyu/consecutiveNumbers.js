/*  *****
Challenge:  8kyu Find the first non-consecutive number

Instructions:  Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.


                                MySolution

                function firstNonConsecutive (arr) {
                    for (let i = 1; i < arr.length; i++){
                        if (arr[i] - arr[i-1] !== 1) return arr[i]
                    }
                    return null
                }

*/