const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5050;

app.use(bodyParser.json());

app.use(cors());

const users = [
  { email: "user@example.com", password: "password123", accessToken: "abc123" }
];

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ accessToken: user.accessToken });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
