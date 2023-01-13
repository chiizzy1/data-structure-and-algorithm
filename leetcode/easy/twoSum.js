/*  *****
Challenge: easy Two Sum

Instructions:  

                                    MY Solution
                        
                   var twoSum = function(nums, target) {
    
                        //  loop through the nums array
                            let obj = {}
                            
                            for (let i = 0; i < nums.length; i++){
                                let num = nums[i];
                                let remainder = target - num;
                                
                                if (num in obj){
                                    return [i, obj[num]]
                                }else{
                                    obj[remainder] = i
                                }
                                
                                
                            }
                            
                     };

                                 leetCode Solution(1)
                            
*/