/*  *****
Challenge:  7 kyu   Mumbling

Instructions:  This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"


                                    MySolution
                     
                    function accum(s) {
                        let ans = ''
                        
                        for ( let i = 0; i < s.length; i++ ){
                        let char = s[i]
                        
                        ans += char.toUpperCase() + char.repeat(i).toLowerCase() 
                        
                        if ( i !== s.length -1 ){ ans += '-'}
                        }
                        return ans
                    }
                    
                                CodeWars Solution

                function accum(s) {
                    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
                }
*/