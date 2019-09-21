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
    },
    customers : [
        { name: 'Natalie', total: ['Quarter', 'Dime'], snack: 'Popcorn'},
        { name: 'Rhonda', total: ['Nickel', 'Dime', 'Dollar', 'Nickel'], snack: 'Chewing gum'},
        { name: 'Vanessa', total: ['Dollar', 'Dime', 'Dollar', 'Nickel'], snack: 'Nuts'},
        { name: 'Devin', total: ['Dollar', 'Dollar', 'Dollar'], snack: 'Cookies'},
        { name: 'Mitch', total: ['Dollar', 'Dime', 'Dollar', 'Nickel'], snack: 'Cup noodles'}],

   checkCurrency : function()
   {

   },
   
   totalCurrency : function()
   {

   },

   purchase : function()
   {

   }


};

vendingMachine.showPrice();