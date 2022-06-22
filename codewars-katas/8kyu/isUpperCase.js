
/*  *****
Challenge:     8 kyu
Is the string uppercase? 

                                       MY Solution

       String.prototype.isUpperCase = function() {
  return   this == this.toUpperCase()
}
                                       CodeWars Solution(s)
    String.prototype.isUpperCase = function() {
    return this.valueOf().toUpperCase() === this.valueOf();
};
                                
*/
