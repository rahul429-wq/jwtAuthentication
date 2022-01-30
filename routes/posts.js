const router = require("express").Router();
const User = require("../model/User");
const verify = require("./VerifyToken");
router.get("/", verify, async (req, res) => {
  //   res.json({ posts: { title: "hello first post", desc: "lorem ipsum....." } });
  res.send(req.user);
  const respp = User.findbyOne({ _id: req.user });
  res.send(respp);
});

module.exports = router;
