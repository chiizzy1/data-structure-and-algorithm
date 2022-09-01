/*  *****
Challenge: 8kyu  DNA to RNA Conversion

Instructions: "GCAT"  =>  "GCAU"

                                    MySolution
                                    
                function DNAtoRNA(dna) {
                    let ans = ""
                    
                    for (let i = 0; i < dna.length; i++){
                        dna[i] === "T" ? ans += "U" : ans += dna[i]
                    }
                    return ans
                }
                                CodeWar Solution
                const DNAtoRNA = dna => dna.replace(/T/g, 'U');
*/