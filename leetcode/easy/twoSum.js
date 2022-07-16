/*  *****
Challenge: easy Two Sum

Instructions:  

                                    MY Solution
                        
                    var twoSum = function(nums, target) {
                        let ans = []
                        
                        nums.map((num, index) => {
                            nums.map((a, b) => {
                                if (index !== b){
                                    if (num + a === target){
                                        ans.push(index)
                                        ans.push(b)
                                    }
                                }
                            })
                        })
                        
                        return ans.slice(0, 2)
                        
                    };


                                 leetCode Solution(1)
                            
*/