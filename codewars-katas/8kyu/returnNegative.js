/*  *****
Challenge:Return Negative

Instructions:In this simple assignment you are given a number and have to make it negative.
 But maybe the number is already negative?
              

                                       MY Solution
    function makeNegative(num) {
        if(0> num ){
            return num
        }else {return num * -1} 
}
                                       CodeWars Solution(s)

    function makeNegative(num) {
            return -Math.abs(num);
        }


    function makeNegative(num) {
        return num < 0 ? num : -num;
        }
*/