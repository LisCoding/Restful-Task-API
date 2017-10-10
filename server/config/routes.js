var task = require('../controllers/tasks.js');

module.exports = function(app) {
  //**** 2. create routes ********
  // serve up the full collection of people born in 1955
  app.get('/tasks', function(req,res) {
    task.index(req,res)
  });

  //Add a person to the dataBase
  app.post('/tasks', function(req,res) {
      task.create_task(req,res)
  });

  // delete name from the database
  app.delete('/tasks/:id', function(req,res) {
      task.delete(req,res)
  });

  // bring up the document of that particular task.
  app.get('/tasks/:id', function(req,res) {
    task.show_task(req, res)
  });

  //Update  particular task.
  app.put('/tasks/:id', function(req,res) {
    task.show_task(req, res)
  });


}
