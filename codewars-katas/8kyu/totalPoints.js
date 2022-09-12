/*  *****
Challenge: 8kyu  Total amount of points 

Instructions: Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point


                                    MySolution
                     function points(games) {
                        let total = 0
                        
                        for (let i = 0; i < games.length; i++){
                            let game = games[i]
                            let x = game[0] * 1
                            let y = game[2] * 1
                            
                            if (x > y){total += 3}
                            if (x === y){total += 1}
                        }
                        return total
                    }               
               
}
                 
*/