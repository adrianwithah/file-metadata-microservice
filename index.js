var express = require("express");
var app = express();
var path = require("path");
var multer = require("multer");
var upload = multer();

app.set("views",path.join(__dirname,"views","pages"));
app.set("view engine","ejs");

app.get("/",function(request, response) {
	response.render("homepage");
});

app.post("/get-file-size",upload.single("upload"),function(request, response) {
	response.end(JSON.stringify({
		size: request.file.size
	}));
});

app.listen(process.env.PORT || 5000);