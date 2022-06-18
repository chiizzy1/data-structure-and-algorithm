/*
8 kyu
Welcome to the City

Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.


function sayHello( name, city, state ) {
    let allNames = ''
    name.forEach((item, index) => index === name.length - 1 ? allNames += item : allNames += `${item} `)
    return `Hello, ${allNames}! Welcome to ${city}, ${state}!`
}


function sayHello( name, city, state ) {
return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
*/