/*  *****
Challenge: 5 kyu Extract the domain name from a URL

Instructions: Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

                                       MY Solution
                
                            function domainName(url){
                                let str = url.split('')
                                let start;
                                let end;
                                if (url.includes("www")){
                                    // end = str.lastIndexOf('.')
                                    for (let i = 0 ; i < str.length; i++){
                                        if (str[i-2] === 'w' && str[i-1] === 'w' && str[i] === '.'){ str.splice(0, i + 1) }
                                        end = str.indexOf('.')
                                    }
                                }
                                else{
                                    end = str.indexOf('.')
                                    for (let i = 0 ; i < str.length; i++){
                                        if (str[i-1] === '/' && str[i] === '/'){ start = 1 + i }
                                    }
                                }
                                return str.slice(start, end).join('')
                            }
                   
                                       CodeWars Solution(s)
               
                      function domainName(url){
                            url = url.replace("https://", '');
                            url = url.replace("http://", '');
                            url = url.replace("www.", '');
                            return url.split('.')[0];
                        };

                        CodeWars Solution(2)
                    
                        function domainName(url){
                          return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
                        }

*/ 


// function dirReduc(arr){
  
//     let road = arr
//       let check = []
//       let n = road.filter( (item) =>  item ==='NORTH')
//       let s = road.filter( (item) =>  item ==='SOUTH')
//       let e = road.filter( (item) =>  item ==='EAST')
//       let w = road.filter( (item) =>  item ==='WEST')
  
//       let uniqueEW 
//       let uniqueNS
//       for (let i = 0; i < road.length; i++){
//           if (road[i - 1] !== 'SOUTH' && road[i] === 'NORTH' && road[i + 1] !== 'SOUTH'){ uniqueNS = true }
//           if (road[i - 1] !== 'WEST' && road[i] === 'EAST' && road[i + 1] !== 'WEST'){ uniqueEW = true }
//       }
  
//       if( uniqueEW && uniqueNS ){ return arr }
//       else{
//           if (n.length === s.length){ road = road.filter(path => path !== 'NORTH' && path !== 'SOUTH') }
//           if (e.length === w.length){ road = road.filter(path => path !== 'EAST' && path !== 'WEST') }
          
//           road.map(item => check.push( road.filter( (a) =>  item === a ).length  ))
  
//           return road.length > 1 ? [road[Math.max(...check)]] : road
//       }
//   }
