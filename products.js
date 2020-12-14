var express=require('express');
const app=express();
var mysql = require('mysql');
var bodyparser=require('body-parser');


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:'products_db'
});

var jsonParser = bodyparser.json()
var urlencodedParser = bodyparser.urlencoded({ extended: false })


  app.post('/add_product', urlencodedParser, function (req, res) {

    var cdate=req.body.c_date;
    var ctime=req.body.c_time;
    var name=req.body.name;
    var price=req.body.price;
    var des=req.body.description;
    connection.query("Insert into products (c_date,c_time,name,price,description) VALUES ('"+cdate+"','"+ctime+"','"+name+"','"+price+"','"+des+"')",function(err,result,fields){
  
        if (err) throw err;  

          res.json('Product added successfully');
      
  })
  
  })



app.listen(4040,() =>{
    console.log('Server started on port 4040...');
  });