// Write a function "coolCities" which takes an array //items is the array//  of city Objects
// I need to create function, but var cities is the array of city objects already created
// and returns a new array containing only those cities whose temperature is
// cooler than 70 degrees.
// check the temperature, then create an array that will showcase the name

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 90.0 },
    { name: 'Michigan', temperature: 52.0 },
    { name: 'Florida', temperature: 90.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 },
    { name: 'Portland', temperature: 60.0 }
  ];

var coolCities = function(items)  {
    var foundcoolCities = [];

    for(var i=0; i<items.length; i++)  {
        var city = items[i];

        if (city.temperature < 70) {
            foundcoolCities.push(city.name); 
        }
    }   
    
    return foundcoolCities;
}

var results = coolCities(cities);
console.log(results);