// line 3 is how you make an object
// the : in lines 4-8 is the same as an = sign
var person = { 
    first_name : "John", 
    last_name  : "Doe",
    middle_name : "Harry",
    age : 40, 
    likes : ["Sushi", "Jet Skiing", "Beer"]
};

//Way 1
console.log(person.first_name);

//Way 2
console.log(person['last_name']);

console.log(person.middle_name);

console.log(person.age);

console.log(person.likes);