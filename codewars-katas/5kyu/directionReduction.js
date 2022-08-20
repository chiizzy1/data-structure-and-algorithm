/*  *****
Challenge:  5kyu  Directions Reduction

Instructions:   In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.


                                    MySolution

                 function dirReduc(arr){
                    let oppDir = { "NORTH" :  "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST"}
                    
                    let reduced = []
                    
                    for (let i = 0; i < arr.length; i++){
                        let prevDir = reduced[ reduced.length - 1]
                        let currentDir = oppDir[arr[i]]
                        
                        if ( prevDir === currentDir ){
                        reduced.pop()
                        }else{
                        reduced.push(arr[i])
                        }
                    }
                    
                    return reduced
                }
                    
                                CodeWars Solution

                                 
                function dirReduc(plan) {
                    var opposite = {
                        'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
                    return plan.reduce(function(dirs, dir){
                        if (dirs[dirs.length - 1] === opposite[dir])
                            dirs.pop();
                        else
                            dirs.push(dir);
                        return dirs;
                        }, []);
                }
               
*/

function dirReduc(arr){
    // get opposite value of each direction
    let oppDir = { "NORTH" :  "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST"}
    

    let reduced = []
    
    for (let i = 0; i < arr.length; i++){

        // gets the last element in the reduced array
      let prevDir = reduced[ reduced.length - 1]

    //   gets the opposite direction of our current arr direction
      let currentDir = oppDir[arr[i]]
      

    //   checks if last direction in our reduced arr is opposite of our current arr direction
      if ( prevDir === currentDir ){
        reduced.pop()
      }else{
        reduced.push(arr[i])
      }
    }
    
    return reduced
  }