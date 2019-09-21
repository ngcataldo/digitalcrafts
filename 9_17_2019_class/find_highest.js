var numbers = [3, 8, 12, 1, 6, 15, 3];

//Add all the values in the array and print to the screen
var final = 0;

for(var i=0; i<numbers.length; i++)  {

  final += numbers [i];
}

console.log(final);

//Using the for loop and if statements inside the for loop
//find the largest number in the array

var largestNumber = numbers[0];

for(var i=0; i<numbers.length; i++)  {

      if(numbers[i]>largestNumber)   {
        largestNumber = numbers[i]
}
}

console.log(largestNumber);

//Step 1
// Create a for loop that creates an array of 100 random numbers
//

 var Array = []; 
for (var i=0; i<100; i++)  {
Array.push(Math.random()); 
}


 console.log(Array);

//Step 2 
// From the random number array created above, find the smallest number

var smallestNumber = Array[0];

for (var i=0; i<100; i++)  {

      if(Array[i]<smallestNumber)   {
        smallestNumber = Array[i]
}
}
 
 console.log(smallestNumber) ; 
