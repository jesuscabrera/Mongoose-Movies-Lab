const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose.connect("mongodb://localhost/Mongoose-Movies-Lab", {
  useNewUrlParser: true,
});

const celebrities = [
  {
    name: "Brad Pitt",
    occupation: "Actor",
    catchPhrase: "I’ve been no stranger to change.",
  },
  {
    name: "Dave Gahan",
    occupation: "Singer",
    catchPhrase:
      "I have the urge to still be part of the world, the universe, of life. Through music I have the feeling that I come a little closer to that.",
  },
  {
    name: "Marina Abramovic",
    occupation: "Artist",
    catchPhrase:
      "We always want to do things the way we like, that's why we never change.",
  },
];

Celebrity.insertMany(celebrities)
  .then((data) => {
    console.log("Success");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
