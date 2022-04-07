const express = require("express");

const User = require("../models/user");
const router = express.Router();

router.get("/getuser", (req, res) => {
  try {
    User.find().then((data) => {
      res.status(200).json({ data: data });
    });
  } catch (error) {
    res.status(500).send(" Server Error occured");
  }
});

router.post("/createuser", (req, res) => {
  try {
    const user = new User({
      userr: req.body.userr,
    });

    user.save().then((data) => {
      res.json({ message: "Success", data: data });
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.put("/edituser/:id", (req, res) => {
  const { userr } = req.body;
  try {
    const newuser = {};
    if (userr) {
      newuser.user = userr;
    }
    User.findByIdAndUpdate(
      req.params.id,
      { $set: newuser },
      { new: true }
    ).then((data) => {
      res.status(200).json({ data: data });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
// route no 4 for deleting the user
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    User.findByIdAndDelete(req.params.id).then((data) => {
      res.status(200).json({ massage: "user deleted", data: data });
    });
  } catch (error) {
    res.status(500).send(" Server Error");
  }
});

module.exports = router;
