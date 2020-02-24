var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var SavedSchema = new Schema({
  
  title: {
    type: String,
    required: true
  },
  
  link: {
    type: String,
    required: true
  },
  
});


var Article = mongoose.model("Saved", SavedSchema);


module.exports = Saved;
