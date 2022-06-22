// convert roman numeral to integer


function solution(roman){
    var romanNumerals = {
      'M': 1000,
      'D': 500,
      'C': 100,
      'L': 50,
      'X': 10,
      'V': 5,
      'I': 1
    };
    
    var numericValue = 0;
    
    for (var i = 0; i < roman.length; i++) {
      if (i+1 < roman.length) {
        if (romanNumerals[roman[i]] < romanNumerals[roman[i+1]]) {
          numericValue += (romanNumerals[roman[i+1]] - romanNumerals[roman[i]]);
          i++;
        } else {
          numericValue += romanNumerals[roman[i]];
        }
      } else {
        numericValue += romanNumerals[roman[i]];
      }
    }
    return numericValue;
  }