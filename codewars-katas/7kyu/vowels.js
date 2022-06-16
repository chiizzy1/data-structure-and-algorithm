function vowelIndices(word){
    word = word.toLowerCase()
    var ans = [];
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for(i=0; i<word.length; i++){
      if(vowels.indexOf(word[i])>=0){ans.push(i+1)}
    }
    return ans
  }