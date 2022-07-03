/*  *****
Challenge: 5 kyu
Human Readable Time

Instructions: Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

                                       MY Solution
                
                      function humanReadable (seconds) {
                         const hour = Math.floor(seconds / 3600)
                            const min = Math.floor(((seconds / 3600) - hour) * 60) 
                            const sec = Math.round(((((seconds / 3600) - hour) * 60) - min) * 60)
                            return  [hour, min, sec].map(item => String(item).length < 2 ? `0${item}` : item ).join(':')
                    
                        }
                                       CodeWars Solution(s)
               
                function humanReadable(seconds) {
                        var HH, MM, SS;
                        HH = "0" + Math.floor(seconds/3600);
                        seconds -= HH * 3600;
                        MM = "0" + Math.floor(seconds/60);
                        seconds -= MM * 60;
                        SS = "0" + seconds;
                        return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
                    }
*/

