//  The formula for the LTV - Lifetime Value of a customer in business	
//  LTV = (ARPA * Gross Margin)/ CCR
//  ARPA: Average Revenue Per Account (The average MRR across all of your active customers)
// Gross Margin: The difference between revenue and COGS (Cost of Goods Sold). This is typically extremely high in Sales
//  Customer Churn Rate: The rate at which your customers are cancelling their subscriptions.]

 var ARPA = 10; 
 var GrossMargin =  20;
 var CCR = 2 

var ltv = (ARPA* GrossMargin)/ CCR

console.log(ltv);
