var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/carAdd');

var products = [
    new Product({
        ID : "1",
        Date: "19/02/1998"
        Time: '20:00',
        Sitting capcity: 10,
        price: 1500000
    }),
    new Product({
      ID : "2",
      Date: "19/02/1998",
      Time: '20:00',
      Sitting capcity: 10,
      price: 1500000
        
    }),
    new Product({
      ID : "3", 
      Date: "19/02/1998",
      Time: '20:00',
      Sitting capcity: 10,
      price: 1500000
      
    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done == products.length)
            exit();
    });
}
function exit() {
    mongoose.disconnect();
}