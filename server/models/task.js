
// require mongoose
var mongoose = require('mongoose');
//create schema
var TaskSchema = new mongoose.Schema({
 title: { type: String, required: true, minlength: 2},
 description: { type: String, default:""},
 completed: {type: Boolean},
},{timestamps: true });

// register the schema as a model
// We are setting this Schema in our Models as 'Rabbit'
 var Task = mongoose.model('Task', TaskSchema);
