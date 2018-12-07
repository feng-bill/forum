const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path')

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const filter = require('./routes/api/filter')

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected")) //if success
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config       -- There are diff passport strategy - e.g. local strategy, JWT strategy
require("./config/passport")(passport); //pass in passport

// Use route
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/filter", filter);

//Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set Static folder
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));

  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("running"));
