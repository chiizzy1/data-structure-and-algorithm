/*  *****
Challenge: 7 kyu Credit Card Mask

Instructions:   Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"


                                    MySolution
                                    
                    function maskify(cc) {
                        let res = ''
                        for (let i = 0; i < cc.length; i++){
                            if ( i >= cc.length - 4){ res += cc[i]}
                            else{ res += '#'}
                        }
                        
                        return res
                    
                    }
                                  CodeWars Solution 
                   
                    function maskify(cc) {
                        return cc.replace(/.(?=.{4})/g, "#");
                    }
                                
                    function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}


maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);
*/