var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
  index: function(request, response) {
    Task.find({}, function (err, tasks) {
      if(err){
        console.log(err);
      }else {
        response.json(tasks)
      }
    })
  },
  create_task: function (req, res){
    console.log("POST DATA ", req.body);
    var task = new Task({title: req.params.title, description: req.params.description, completed: req.params.completed});
    // Try to save that new task to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    task.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong', err);
        res.send('<h1>We could not add this task</h1>')
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        //redirect the user back to the root route.
        res.send('<h1>successfully add a new task</h1>')
      }
    })
  },
  show_task: function(req, res) {
    task.find({name: req.params.name}, function (err, task) {
      if(err){
        console.log(err);
      }
      else {
          res.json(task)
      }
    })
  },
  delete: function(req, res) {
    task.remove({name: req.params.name}, function (err,task) {
      if(err){
        console.log(err);
      }else {
        res.send('<h1>successfully remove task</h1>')
      }
    })
  },
}
