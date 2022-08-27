/*  *****
Challenge: 4kyu  Human readable duration format

Instructions: 


                                    MySolution
                                    
                             
                                  CodeWars Solution 

               function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
                 
*/


function formatDuration (secs){

    if (secs === 0){ return "now" }
    
    let ans = []


    let year = secs >= 31536000 ? Math.floor(secs / 31536000) : 0
    secs -= year * 31536000
    // let month = secs >= 2592000 ? Math.floor(secs / 2592000) : 0
    // secs -= month * 2592000
    // let week = secs >= 604800 ? Math.floor(secs / 604800) : 0
    // secs -= week * 604800
    let day = secs >= 86400 ? Math.floor(secs / 86400) : 0
    secs -= day * 86400
    let hour = secs >= 3600 ? Math.floor(secs / 3600) : 0
    secs -= hour * 3600
    let minute = secs >= 60 ? Math.floor(secs / 60) : 0
    secs -= minute * 60
    let seconds = Math.round(secs)

    if ( year > 0){
        ans.push(year + ` ${year > 1 ? "years" : "year"}`) 
    }
    // if ( month > 0){
    //     ans.push(month + ` ${month > 1 ? "months" : "month"}`) 
    // }
    // if ( week > 0){
    //     ans.push( week + ` ${week > 1 ? "weeks" : "week"}`)
    // }
    if ( day > 0){
        ans.push(day + ` ${day > 1 ? "days" : "day"}`) 
    }
    if ( hour > 0){
        ans.push(hour + ` ${hour > 1 ? "hours" : "hour"}`) 
    }
    if ( minute > 0){
        ans.push(minute + ` ${minute > 1 ? "minutes" : "minute"}`) 
    }
    if ( seconds > 0){
        ans.push(seconds + ` ${seconds > 1 ? "seconds" : "second"}`) 
    }

    if (ans.length === 2){
        return `${ans[0]} and ${ans[1]}`
    }

    else if (ans.length > 2){
        return ans.map((time, index) => index === ans.length - 1 ? `and ${time}` : index === ans.length - 2 ? `${time}` : `${time},`).join(' ')
    }
    else{
      return ans[0]
    }
}