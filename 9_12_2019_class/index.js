var ltvFunction = function(ARPA,  MM,  churn)  {

   var LTV = (ARPA*MM)/churn;

  return LTV;

}

console.log(ltvFunction(10,  2,  5));

console.log("Steve thinks the LTV should be " + ltvFunction(5,  4,  3));





console.log("John thinks the LTV should be " + ltvFunction(5,20, 3));     

var CircleFunction = function (R)   {

   var Circle = (R*R*3.14)

   return Circle;

}


console.log(CircleFunction(5))

console.log ("Natalie thinks the Circle should be " + CircleFunction (8));



