

/*  *****
Challenge: 6kyu Length of missing array

Instructions: You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

                                       MY Solution
                  
                    function getLengthOfMissingArray(arrayOfArrays) {
                            if ( arrayOfArrays === [] || arrayOfArrays ===  null || arrayOfArrays.indexOf(null) != -1){return 0}
                            else{
                                const arr = arrayOfArrays.map(arr => arr.length)
                                if (arr.indexOf(0) != -1 ){ return 0 }
                                else if (arr.length > 1){
                                for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
                                    if (arr.indexOf(i) === -1){
                                    return i
                                    }
                                }
                                }
                            
                                else{ return 0 }
                            }
                            
                     }

                                       CodeWars Solution(s)
        
                                       function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays == null || arrayOfArrays.length == 0)
    return 0;
  
  var length = arrayOfArrays.length;
  var lengths = [];
  
  for (var i=0; i<length; ++i)
  {
    if (arrayOfArrays[i] == null || arrayOfArrays[i].length == 0)
      return 0;
    
    lengths[arrayOfArrays[i].length] = true;
  }
  
  var lowest = 0;
  
  for (var i=1, l=lengths.length; i<=l; ++i)
  {
    if (!lengths[i])
    {
      if (lowest != 0)
        return i;
    }
    else
      lowest = i;
  }
  
}
            
*/

