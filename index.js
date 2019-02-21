const server = require("./index");

const port = process.env.PORT || 4000;
server.listen(port, _ => {
  console.log(`Running on port ${port}`);
});
