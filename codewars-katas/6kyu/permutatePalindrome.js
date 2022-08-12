/*  *****
Challenge: 6kyu 


Instructions: 

                                    MySolution
                     
                   
        
                    CodeWar Solution

                   

*/

function check (str){
    str = str.toLowerCase()

    let obj = {}

    for (let i = 0; i < str.length; i++){
        let char = str[i]
        obj[char] = obj[char] + 1 || 1
    }

    return obj
}

function check (str){
    str = str.toLowerCase()

    let obj = {}

    for (let i = 0; i < str.length; i++){
        let char = str[i]
        obj[char] = obj[char] + 1 || 1
    }

    return obj
}