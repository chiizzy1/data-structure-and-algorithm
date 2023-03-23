


/*  *****
Challenge: 7kyu Divide and Conquer

Instructions:


                                  My Solution
        function divCon(x){
            let numSum = 0;
            let strSum = 0;
            
            for (let i = 0; i < x.length; i++){ 
                if (typeof(x[i]) === 'string'){
                strSum += Number(x[i])
                }else{
                numSum += x[i]
                }
            }
            
            return numSum - strSum
        }
*/