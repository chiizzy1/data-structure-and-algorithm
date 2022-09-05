/*  *****
Challenge: 7 kyu  Remove anchor from URL

Instructions:  "www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

                                    MySolution

                         function removeUrlAnchor(url){
                            let str = ""
                            for (let i in url){
                                if(url[i] === "#")break;
                                else str += url[i]
                            }
                            return str
                        }

                                 Code wars Solution
                   
                    function removeUrlAnchor(url){
                        return url.split('#')[0];
                    } 

                            Code wars Solution
                            
                    function removeUrlAnchor(url){
                        return url.replace(/[#].+$/g, '')
                    }
*/