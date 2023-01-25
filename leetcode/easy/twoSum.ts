/*  *****
Challenge: easy Two Sum

Instructions:  

                                    MY Solution
                        
                function twoSum(nums: number[], target: number): number[] {
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
                            
*/