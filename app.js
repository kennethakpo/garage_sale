var express = require("express");
var app = express();


app.get("/", (req, res) => {
    ({
        name: "Kenneth",
        age: "too old",
        height: "Tall"
    },
    {
        name: "Chiamaka",
        age: "too old too",
        height: "Short"
    })
});





const PORT = process.env.PORT || 5000;
app.listen(PORT, process.env.IP, function(){
    console.log("GarageSale is online");
});

