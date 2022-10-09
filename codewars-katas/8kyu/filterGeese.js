/*  *****
Challenge: 8kyu Filter out the geese

Instructions: The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]


                                    MySolution
              function gooseFilter (birds) {
                var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
                
                return birds.filter(word => !geese.includes(word) )
                // return an array containing all of the strings in the input array except those that match strings in geese
            };

*/