var mongoose = require("mongoose");
var data = require("./fakeData.js");

mongoose.connect("mongodb://yon:yon123@ds155252.mlab.com:55252/fec-image");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("mongoosy~~");
});

var imageSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  picture: Array
});

var image = mongoose.model("image", imageSchema);

image.insertMany(data);

module.exports = image;
