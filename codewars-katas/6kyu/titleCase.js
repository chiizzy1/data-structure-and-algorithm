/*  *****
Challenge: 6kyu Title Case

Instructions:   titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


                                    MySolution
                      
                function titleCase(title, minorWords) {
                    if(title.length < 1){ return title }
                    
                    title = title.toLowerCase().split(' ')
                    
                    if(minorWords){
                    minorWords = minorWords.toLowerCase().split(' ')
                    }
                    
                    if (!minorWords){
                        return title.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
                    }
                    
                    return title.map((word, index) => {
                        if ( index !== 0  && minorWords.includes(word)){
                        return word
                        }
                        else{
                        return word[0].toUpperCase() + word.slice(1)
                        }
                    }).join(' ')
                }                    

                                CodeWar Solution
                                
                function titleCase(title, minorWords) {
                    if(title.length === 0) return title;
                    var words = title.toLowerCase().split(" ");
                    var minorWordsArray = minorWords?minorWords.toLowerCase().split(" "):[];
                    return words.map(function(word,index){
                        if(minorWordsArray.indexOf(word) !== -1 && index!=0){
                        return word;
                        }
                        return word.charAt(0).toUpperCase() + word.slice(1);
                    }).join(" ");
                }

*/