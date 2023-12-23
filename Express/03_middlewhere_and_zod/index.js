const express = require("express");
const z = require("zod");
const app = express();

// const schema = z.array(
//   z
//     .number()
//     .or(
//       z.object({
//         name: z.string(),
//         age: z.number(),
//       })
//     )
//     .or(z.string())
// );

const schema = z.array(z.number());

// we use express.json() because we don't know what will come in the body it could be a text a html a json or anything that's why we defined it as json()
app.use(express.json());

// app.post("/health-check", (req, res) => {
//   const kidneys = req.body.kidneys;
//   res.send("lenght of kidneys is : " + kidneys.length);
// });

app.post("/health-check", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  res.send({
    response,
  });
});

// Global catch (if anything wrong happes with the server than this middlewhere will be called an it have 4 parameters not three)
app.use((err, req, res, next) => {
  res.status(500).json({
    msg: "Sorry something is wrong with the server. It will be fixed soon.",
  });
});
app.listen(3000);
