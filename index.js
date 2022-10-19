var express = require("express");
const app = express();
var mongoose = require('mongoose');
var web = require('./routes/web.js');
const port = process.env.PORT || 3000;


mongoose.connect("mongodb://localhost:27017/product",{

}).then(() => {
    console.log("Connection Successful......");
  })
  .catch((err) => console.log("Connection Lost...."));

app.use(express.json());
app.use('/product',web)


app.listen(port , ()=>{
    console.log(`listening on port :${port}`);
});
