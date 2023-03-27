/*  *****
Challenge:  Easy Word pattern
Instructions: Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false


                                MySolution

            

                        Optimized Solution
            
            var wordPattern = function(pattern, s) {
    const st = s.split(" ");
    if(pattern.length !== st.length) return false;

    let map1 = new Map(), map2 = new Map();

    for(let i in pattern) {
        // both values starts as undefined;
        // since it's a pattern, they must exist in the same index or both be undefined else it is not a pattern
        if(map1.get(pattern[i]) !== map2.get(st[i])) return false;
        // the word is made the key while the index is made the value;
        map1.set(pattern[i], i);
        map2.set(st[i], i); 
    }

    return true
};

*/