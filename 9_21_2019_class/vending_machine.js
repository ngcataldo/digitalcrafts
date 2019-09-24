var vendingMachine = {
    items: [
        { Snack : 'Snickers', price : 1.25},
        { Snack : 'Popcorn', price : 1.00},
        { Snack : 'Chewing gum', price : 0.25},
        { Snack : 'Nuts', price : 0.50},
        { Snack : 'Cookies', price : 1.70},
        { Snack : 'Cup noodles', price : 2.25}],
    currency: [
        { coin : 'Nickel', value : 0.05},
        { coin : 'Dime', value : 0.10},
        { coin : 'Quarter', value : 0.25},
        { coin : 'Dollar', value : 1.00}],
    showPrice : function()
    {
        for(var i = 0; i < this.items.length; i++)
        {
            var pullItems = this.items[i];
            console.log('Snack: ' + pullItems.Snack + ' Price: ' + pullItems.price);

        }
    }
    customers : [
        { name: 'Natalie', total: ['Quarter', 'Dime'], snack: 'Popcorn'},
        { name: 'Rhonda', total: ['Nickel', 'Dime', 'Dollar', 'Nickel'], snack: 'Chewing gum'},
        { name: 'Vanessa', total: ['Dollar', 'Dime', 'Dollar', 'Nickel'], snack: 'Nuts'},
        { name: 'Devin', total: ['Dollar', 'Dollar', 'Dollar'], snack: 'Cookies'},
        { name: 'Mitch', total: ['Dollar', 'Dime', 'Dollar', 'Nickel'], snack: 'Cup noodles'}],

   checkCurrency : function()
    {
// grab the vending machine valid currency and store into an array
    varvalidCurrencyArray = [];
    for (var c=0; c < this.currency.length; c++)
    {
        validCurrecyArray.push(this.currency[c].coin);
    },
   
//Check each customers currency that they put into the vending machine and compare to the validCurrencyArray
 
for (var i = 0; i < this.customers.length;i++)
{
    var pullCustomersTotal = this.customers[i].currencytotal;

    for (var j = 0; j < pullCustomersTotal.length; j++)
    {
        if(validCurrencyArray.indexOf(pullCustomersTotal[j]) == -1)
        {
            booleanValidCurrency = false;
        }
    }

//Sets the key value pair for valid currency for each customer
    if(booleanValidCurrency)
    {
        this.customers[i].validcurrency = booleanValidCurrency;
    }
    else 
    {
        this.customers[i].validcurrency = booleanValidCurrency;
    }

    booleanValidCurrency = true;  //Resets the boolean to true. If not reset, the value will always be false.      
}

// console.log(this.customers);
//Returns the new customer object with updated key value pair
return this.customers;
},

totalCurrency : function()
{
var updatedCustomerCurrencyObject = vendingMachine.checkCurrency(); // This object holds the new currency validation key value pair
var totalAmountCustomerInput = 0; //This is the number amount the customer placed in machine

for (var i = 0; i < updatedCustomerCurrencyObject.length; i++)
{
    var validCurrency = updatedCustomerCurrencyObject[i].validcurrency;
    var currencyTotal = updatedCustomerCurrencyObject[i].currencytotal;

    if(validCurrency)  //if true, it loops through each customer currency, compares to the valid vending machine currency, sums the associated value. done for each customer 
    {
        //console.log("All Valid Currencies! Grab Total!");
        for (var j = 0; j < currencyTotal.length;j++)
        {
            var currentCurrency = currencyTotal[j];
            for (var k = 0; k < this.currency.length; k++)
            {
                if(currentCurrency == this.currency[k].coin)
                {
                   totalAmountCustomerInput += this.currency[k].value;
                }
            }
        }
    }

    this.customers[i].numbertotal = totalAmountCustomerInput; //Now the total number amount is assigned to each customer object
    totalAmountCustomerInput = 0; //Initialize value back to 0 to prevent input from adding from previous customer
}
return this.customers;
},

purchase : function()
{
var updatedCustomerTotalCurrencyObject = vendingMachine.totalCurrency(); //This object holds the total number the customer input into the totalnumber key
var getSnackPrice;
var message = "";
vendingMachine.showPrice(); //Shows Snacks and Prices

for (var i = 0; i < updatedCustomerTotalCurrencyObject.length;i++)
{
    var isCustomerValid = updatedCustomerTotalCurrencyObject[i].validcurrency;
    var customerChosenSnack = updatedCustomerTotalCurrencyObject[i].snackpurchase;
    var customerNumberTotal = updatedCustomerTotalCurrencyObject[i].numbertotal;
    var customerName = updatedCustomerTotalCurrencyObject[i].name;

    if(isCustomerValid) //If True, checks customers chosen snack and gets associated price from vending machine
    {
        for (var j = 0; j < this.items.length; j++)
        {
            if (customerChosenSnack == this.items[j].snack)
            {
                getSnackPrice = this.items[j].price;
                break;
            }
        }

        if(customerChosenSnack != "" && customerNumberTotal < getSnackPrice) // If the amount entered is less than what the item cost, an error message is produced stating they have not entered enough money
        {
            console.log(customerName + ": ERROR NOT ENOUGH MONEY ENTERED");
        }
        else if (customerChosenSnack != "" && customerNumberTotal >= getSnackPrice) //If the amount is equal to or above the amount of the item, they should get their item and left over change, if any
        {
            console.log(customerName + ": PURCHASE CONFIRMED. HERE IS YOUR LEFTOVER CHANGE: " + (customerNumberTotal - getSnackPrice));
        }
        else  //-- If they do not choose an item, all the money can be returned to them
        {
            console.log(customerName + ": NO ITEM CHOSEN. ALL MONEY WILL BE RETURNED");
        }
    }
    else 
    {
        console.log(customerName + ": INVALID CURRENCY DETECTED. WE ONLY ACCEPT XXXXXXX. SPITS OUT EVERYTHING");
    }
}
}    
};

vendingMachine.purchase();
