const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

//Iteration 2: Listing Our Celebrities
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities", { celebrityList: celebrities });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

//Iteration #4: Adding New Celebrities
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

// Iteration #4.5: Send the data from the form to this route to create the celebrity and save to the database

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
  })
    .then((celebrity) => {
      console.log("New celebrity added", celebrity);
      res.redirect("/celebrities");
    })
    .catch((err) => {
      res.redirect("/celebrities/new");
    });
});

//Iteration #3: The Celebrity Details Page

router.get("/celebrities/:_id", (req, res) => {
  Celebrity.findById(req.params._id).then((celebrity) => {
    // res.send(celebrity);
    res.render("celebrities/show", { celebrity });
  });
});

//Iteration #5: Deleting Celebrities

router.post("/celebrities/:_id/delete", (req, res, next) => {
  const deleteId = req.params._id;
  Celebrity.deleteOne({ _id: deleteId }).then(() => {
    res.redirect("/celebrities");
  });
});

module.exports = router;
