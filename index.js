require("dotenv/config");
const express = require("express");
const { userRouter } = require("./routes/users");

const app = express();
const port = 3001;

app.use(express.json());

// we are using the userRouter for requests that start with /users
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
