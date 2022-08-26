/*  *****
Challenge: 6kyu Unique Strings

Instructions:   
                                    MySolution
                                    
                 
                                  CodeWars Solution 
                   
                   
*/


function check(str) {
    let uniques = [...new Set (str.toLowerCase())].length
    
    if (str.length === uniques){

        let ans = 1

        if (uniques == 0 || uniques == 1){
            ans = ans
          }else{
            for(let i = uniques; i >= 1; i--){
              ans = ans * i;
            }
        } 
        
        return  BigInt(`${ans}`)
    }

    else{
        return BigInt(`${str.length}`)
    }
}



function uniqCount(str) {
    let uniques = [...new Set (str.toLowerCase())].length
    
    if (str.length === uniques){

        let ans = 1

        if (uniques == 0 || uniques == 1){
            ans = ans
          }else{
            for(let i = uniques; i >= 1; i--){
              ans = ans * i;
            }
        } 
        
        return  BigInt(`${ans}`)
    }

    else{
      if (uniques == 0 || uniques == 1){
        return BigInt(uniques)
      }
        return BigInt(`${str.length}`)
    }
}