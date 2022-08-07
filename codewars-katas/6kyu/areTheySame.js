/*  *****
Challenge: 6 kyu
Are they the "same"?


Instructions:  Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

                                    MySolution
                     
                function comp(a, b){
                    if ( a === [] || b === [] || a === null|| b === null || a.length !== b.length ){ return false }
                    a = a.sort( (a, b) => a- b)
                    b = b.sort( (a, b) => a- b)
                    for (let i = 0; i < b.length; i++){
                        let num = b[i]
                        if ( a[i] !== Math.sqrt(num) ){
                            return false
                        }
                    }
                    return true
                }                  

                                    CodeWar Solution(1)

        function comp(a, b) {
            if (!a || !b || a.length !== b.length) return false;
            return a.map(x => x * x).sort().toString() === b.sort().toString();
        }

                                    CodeWar Solution(2)
                
                function comp(array1, array2){
                    try{
                        var sortArray2=array2.map(Math.sqrt).sort();
                        return JSON.stringify(array1.sort())===JSON.stringify(sortArray2);
                    }catch(e){
                        return false;
                    }
                }
*/