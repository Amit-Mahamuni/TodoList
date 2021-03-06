const express = require("express");
const bodyParser = require("body-parser");
const mDate = require(__dirname +"/date.js");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const item = [];
const worklist = [];

app.listen(3000, function () {
    console.log("sever started on port 3000");
});


app.get("/", function (req, res) {

    day = mDate.getDate();
    res.render("list", { kindday: day, newItems: item, listTitle: "dL"});

});


app.post("/", function (req, res) {
    if(req.body.button == "dL"){
        item.push(req.body.newItem);
        res.redirect("/");
    }else{
        worklist.push(req.body.newItem);
        res.redirect("/worklist");
    }

});

app.get("/worklist", function (req, res) {

    res.render("list", { kindday: "Work", newItems: worklist, listTitle: "wL"});

});

app.get("/about", function (req, res) {

    res.render("about");

});
