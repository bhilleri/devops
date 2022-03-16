const express = require("express");

const app = express();
app.get("*", (req, res)=>res.send("app 2"));

app.listen(8080, () => console.log("Server open"))