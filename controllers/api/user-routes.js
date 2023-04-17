const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
    try {
      const dbUserData = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confpassword: req.body.confPassword,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.email = req.body.email;
        req.session.id = dbUserData.id;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });