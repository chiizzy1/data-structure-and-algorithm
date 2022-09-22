/*  *****
Challenge: 8 kyu
Removing Elements

Instructions:  Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]


                             MySolution

           function removeEveryOther(arr){
  return arr.filter((item, index) => index % 2 === 0)
} 
            
*/