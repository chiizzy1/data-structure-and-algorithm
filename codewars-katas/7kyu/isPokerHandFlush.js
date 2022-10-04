/*  *****
Challenge: 7kyu Determine if the poker hand is flush

Instructions:  

                                 MySolution

                    function isFlush(cards) {
                        for(let i = 1; i < cards.length; i++){
                            let card = cards[i]
                            let prevCard = cards[i-1]
                            if (card[card.length - 1] !== prevCard[prevCard.length - 1]){
                            return false
                            }
                        }
                        return true;
                    }
                  
                             Codewars Solution
                    function isFlush(cards) {
                        return cards.every(a=>cards[0].slice(-1)===a.slice(-1))
                    }
*/