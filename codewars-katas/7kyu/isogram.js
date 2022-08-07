/*  *****
Challenge: 7 kyu
Isograms


Instructions:  

                                    MySolution

              function isIsogram(str){
                str = str.toLowerCase()
                let check = {}
                
                for (let i = 0; i < str.length; i++){
                  let char = str[i]
                  check[char] = check[char] + 1 || 1
                  if ( check[char] > 1  ){ return false}
                }
                return true
              }
                                    CodeWar Solution(1)

          function isIsogram(str){
            return new Set(str.toUpperCase()).size == str.length;
          }
                  CodeWar Solution(2)

              function isIsogram(str){ 
                return !/(\w).*\1/i.test(str)
              }
*/

