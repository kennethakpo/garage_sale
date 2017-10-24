var express = require("express");
var app = express();


app.get("/", (req, res) => {
    
});





const PORT = process.env.PORT || 5000;
app.listen(PORT, process.env.IP, function(){
    console.log("GarageSale is online");
});

