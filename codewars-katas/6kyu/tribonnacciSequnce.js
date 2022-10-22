


/*  *****
Challenge:  6kyu  Two Sum

Instructions:  Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]


                                    MySolution

                function tribonacci(signature,n){
                    for (var i = 3; i < n; i++) {
                    signature[i] = signature[i-1] + signature[i-2] + signature[i-3];
                    }
                    return signature.slice(0, n);
                }

                    
                                CodeWars Solution

                function tribonacci(signature,n) {
  const result = signature.slice(0, n);
  while (result.length < n) {
    result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
  }
  return result;
}
               
               
*/