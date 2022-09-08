/*  *****
Challenge: 7kyu  Which color is the brightest?

Instructions:  You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

For example,

brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"

                                MySolution

                    function brightest(colors){
                        let maxVal = 0
                        let index 
                        
                        for (let i = 0; i < colors.length; i++){
                            let color = colors[i]
                            let r =  parseInt(color.slice(1,3),16);
                            let g =  parseInt(color.slice(3,5),16)
                            let b =  parseInt(color.slice(5,7),16)
                            
                            let val = Math.max(r,g,b)
                            
                            if (val > maxVal){
                            maxVal = val;
                            index = i
                            }
                        }
                        return colors[index]
                    }
               
                            Codewar Solution

                        function sB(s){
                            return Math.max(...[s.slice(1, 3), s.slice(3, 5), s.slice(5, 7)].map(x => parseInt(x, 16)))
                            }

                            function brightest(colors){
                            return colors.sort((a, b) => sB(b) - sB(a))[0]
                         }
*/