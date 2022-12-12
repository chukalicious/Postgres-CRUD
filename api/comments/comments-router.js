const express = require("express");
const Comments = require("./comments-model");
const router = express.Router();

router.get("/", (req, res) => {
  Comments.find()
    .then((comments) => {
      res.status(200).json(comments);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the comments",
      });
    });
});

router.post("/", (req, res) => {
  Comments.add(req.body)
    .then((comment) => {
      res.status(201).json(comment);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error adding the comment",
      });
    });
});

module.exports = router;
