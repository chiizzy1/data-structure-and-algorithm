/*  *****
Challenge: easy 205. Isomorphic Strings

Instructions:
Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true

                               My Solution
                               
            let convertString = function(a){
                let mapA = new Map();
                let id = 0;
                let str = "";

                for (let i = 0; i < a.length; i++){
                    if (!mapA.has(a[i])){
                        mapA.set(a[i], id)
                        str += id + '.';
                        id++
                    }
                    else{
                        let key = mapA.get(a[i]);
                        str += key + '.'
                    }
                }

                return str;
            }
            var isIsomorphic = function(s, t) {
                
                if (s.length !== t.length) return false;

                return convertString(s) === convertString(t);
            };                  
             
                        CodeWars Solution 1
          
        const createStringCode = (s) => {
            let map = new Map();
            let id = 0;
            let str = '';
            for (let i = 0; i < s.length; i++) {
                if (!map.has(s[i])) {
                    map.set(s[i], id);
                    str = str + id + '.';
                    id += 1;
                } else {
                    const key = map.get(s[i]);
                    str = str + key + '.';
                }
            }
            return str;
        }

        const isIsomorphic = (s, t) => {
            return createStringCode(s) === createStringCode(t);
        };
                                
*/