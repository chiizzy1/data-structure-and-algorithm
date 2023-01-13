/*  *****
Challenge: easy 2129. Capitalize the Title
Instructions:  
Input: title = "capiTalIze tHe titLe"
Output: "Capitalize The Title"
                                    MY Solution
                        
                var capitalizeTitle = function(title) {
                    title = title.split(" ");

                    return title.map((word, index) => word.length < 3 ? word.toLowerCase() : `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(" ")
                }; 
*/