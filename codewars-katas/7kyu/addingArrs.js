
/*  *****
Challenge: 7kyu. Adding Arrays

Instructions: 
[
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
] // => "Just Live Life Man"

                                    MY Solution
             function arrAdder(arr) {
                
                let sentence = "";
                
                for (let i = 0; i < arr[0].length; i++){
                    for (let j = 0; j < arr.length; j++){
                    sentence += arr[j][i];
                    }
                    sentence += " ";
                }
                return sentence.trim()
            }      
             
*/



