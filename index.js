var express = require("express");
const app = express();
const cloudinary = require("cloudinary").v2;
var mongoose = require('mongoose');
var web = require('./routes/web.js');
const port = process.env.PORT || 3000;

cloudinary.config({ 
  cloud_name: 'dwiloz4gn', 
  api_key: '912299772734882', 
  api_secret: 'zAVfOhlJJ_iRfq2PolA8_W2GowE' 
});


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
