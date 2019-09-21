// STEP 1
// function should test out if person is old enough to drive

var canDrive= function(age)  {

	if(age >=  16)  {
     		return true;
	}

     	return false;

}

  console.log(canDrive(22));

// function should test out if a person can drink 

var canDrink= function(age)  {

   if(age >= 21)  {
     return true;

   }
     
     return false

   }

// test example console.log(canDrink(22));

// function should test out if they can play in the McDonald's ball pit

var canPlayInBallPit= function(age)   {
     
      if(age <= 10)  {
      	return true;

   } 
     
     return false

   }  

// test example console.log(canPlayInBallPit(9));

// function should test out if a person can rent a car

var canRent= function(age)  {
  
      if(age >= 25)  {
      	return true;

   }

     return false

   }
 
// test example console.log(canRent(27));

// STEP 2 
// creating setup to test out if ages are true or false

var resultArray = [];

var testAges = function(name, age)  {
	
  var message = "";

  if (canDrive(age))  {
     message = name + " can drive";
  }  else  {
     message = name + " cannot drive";
  }

  resultArray.push(message);


   if (canDrink(age))  {
        message = name +  " can drink";
   }  else  {
     	  message = name +  " cannot drink";
   }

  
   resultArray.push(message);

   
   if (canPlayInBallPit(age))  {
      message = name +  " can play in the ball pit";
   }  else  {
      message = name +  " cannot play in the ball pit";
   }


   resultArray.push(message);


   if (canRent(age))  {
      message = name +  "  can rent";
   }  else  {
      message = name +  "  can not rent";
   }

  
  resultArray.push(message);

};

testAges("Sarah", 35);  
testAges("Bob", 19);
testAges("Henry", 22);
testAges("Katie", 9);


console.log(resultArray);
