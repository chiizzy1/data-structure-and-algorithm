/*  *****
Challenge:  7 kyu   Switcheroo


Instructions:  Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'


                                    MySolution
                     
                    function switcheroo(x){
                        let str  = ""
                        
                        for ( let i = 0; i < x.length; i++ ){
                            let char = x[i]
                            if ( char === "a" ){
                            str += "b"
                            }
                            else if ( char === "b" ){
                            str += "a"
                            }
                            else{ str += char }
                        }
                        
                        return str
                    }
                    
                                CodeWars Solution

                const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")

*/