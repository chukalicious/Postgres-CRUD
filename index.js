const server = require("./api/server");

const Replies = require("./api/replies/replies-model");

// DOGS ENDPOINTS
// DOGS ENDPOINTS
// DOGS ENDPOINTS
server.get("/api/dogs", (req, res) => {
  Replies.find()
    .then((dogs) => {
      res.status(200).json(dogs);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the dogs",
      });
    });
});

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
