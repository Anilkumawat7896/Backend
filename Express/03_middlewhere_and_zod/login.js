const express = require("express");
const app = express();
const z = require("zod");
const PORT = 3000;
app.use(express.json());

function validateInput(obj) {
  const schema = z.object({
    username: z.string().email({ message: "Email is not valid" }),
    password: z.string().min(8, { message: "Password is to short" }),
  });

  const response = schema.safeParse(obj);
  return response;
}

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const output = validateInput({ username, password });
  res.send(output.success ? "You are in" : output.error.issues[0].message);
});

app.listen(PORT);
