// router is used to create routes in express within a separate file
const router = require("express").Router();
// import cake model
const Cake = require("../models/cake");

// localhost:3000/cakes
router.get("/cakes", (req, res) => {
  Cake.findAll()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Database connection failed.",
        error: err.stack,
      });
    });
});

// localhost:3000/cakes/1
router.get("/cakes/", (req, res) => {
  // We can grand id from the URL query parameters
  //   find the cake with id, the result is going be a cake object
  Cake.findByPk(title)
    .then((cake) => {
      // if cake is undefined or null, we return 404
      if (!cake) {
        res.status(404).send({
          message: "Cake not found.",
        });
      }

      res.status(200).send(cake);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Database connection failed.",
        error: err.stack,
      });
    });
});

// Post to create a cake
// localhost:3000/cakes
router.post("/cakes", (req, res) => {
  var newCake = {
    
    title: req.body.title,
    description: req.body.description,
    time: req.body.time,
    priority_level: req.body.priority_level,
    category: req.body.category,
    progress_level: req.body.progress_level,

  };

  // update the database with new cake
  Cake.create(newCake)
    .then((cake) => {
      res.status(201).send(cake);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Database connection failed.",
        error: err.stack,
      });
    });
});

// Patch to update a cake
// localhost:3000/cakes/1
router.patch("/cakes/:id", (req, res) => {
  // We can grand id from the URL query parameters
  // find the cake with id, the result is going be a cake object
  Cake.findByPk(title)
    .then((cake) => {
      // if cake is undefined or null, we return 404
      if (!cake) {
        res.status(404).send({
          message: "Cake not found.",
        });
      }

      // update the cake record

      cake.title = req.body.title;
      cake.description = req.body.description;
      cake.time = req.body.time;
      cake.priority_level = req.body.priority_level;
      cake.category = req.body.category;
      cake.progress_level = req.body.progress_level;

      // persist update to dtabase using save() - this returns a promise object as well.
      cake
        .save()
        .then((cake) => {
          res.status(200).send(cake);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message,
            error: err.stack,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Database connection failed.",
        error: err.stack,
      });
    });
});

// Put to override cake object
// localhost:3000/cakes/1
// router.put("/cakes/:id", (req, res) => {
//   // We can grand id from the URL query parameters
//   var id = parseInt(req.params.id); // convert string id to integer
//   //   find the cake with id, the result is going be a cake object
//   var cake = cakes.find((u) => {
//     return u.id === id;
//   });

//   // if cake is undefined, we return 404
//   if (!cake) {
//     res.status(404).send({
//       message: "Cake not found.",
//     });
//   }

//   // update the cake that is found
//   cake.id = req.body.id;
//   cake.cakename = req.body.cakename;
//   cake.email = req.body.email;

//   res.status(200).send(cake);
// });

// Delete a cake
// localhost:3000/cakes/1
router.delete("/cakes/:id", (req, res) => {
  // We can grand id from the URL query parameters
  // find the cake with id, the result is going be a cake object
  Cake.findByPk(title)
    .then((cake) => {
      // if cake is undefined or null, we return 404
      if (!cake) {
        res.status(404).send({
          message: "Cake not found.",
        });
      }

      // destroy the cake record - this does return a promise object
      cake
        .destroy()
        .then((cake) => {
          res.status(200).send(cake);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message,
            error: err.stack,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Database connection failed.",
        error: err.stack,
      });
    });
});

module.exports = router;