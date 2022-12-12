const express = require("express");
const Comments = require("./comments-model");
const router = express.Router();

router.get("/", (req, res) => {
  Comments.get()
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

router.get("/:id", (req, res) => {
  Comments.getByID(req.params.id)
    .then((comment) => {
      if (comment) {
        res.status(200).json(comment);
      } else {
        res.status(404).json({ message: "Comment not found" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the comment",
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
