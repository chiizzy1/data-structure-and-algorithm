  /*  *****
Challenge: 7 kyu
The highest profit wins!

Instructions: Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples(Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5, 2334454]
[1]         --> [1, 1]

                                       MY Solution

            function minMax(arr){
                return [Math.min(...arr), Math.max(...arr)]
            }
                                       CodeWars Solution(s)
                function minMax(arr) {
                        var a = arr.sort(function(a,b) {return a-b});
                        return [a[0], a[a.length-1]];
                    }
*/
