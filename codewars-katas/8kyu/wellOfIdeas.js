




/*  *****
Challenge: 8kyu  Well of Ideas - Easy Version

Instructions:  For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

                                    MySolution

            function well(x){
                let pass = x.filter(bool => bool === "good").length
                return pass === 2 || pass === 1 ? 'Publish!' :  pass > 2 ? 'I smell a series!' : 'Fail!'
            }
                
*/