// Expres what --->  it is like a doctor who have a skill and can provide service based on that skill
// http server -->  your logic or your code is like doctor now how will you expose or provide that doctor to the whole world
//  you must need a clicnic where he can provide service and that clinic is a platefrom and get the service
//  like this httpservrs are the plateform from where you can give your logic or your code a plateform from where whole world can access it

//  ?  ->  how do you create a http server
// ans ->  express is one way , there are many libreary which lets you create a http server

const express = require("express");
const app = express();

const PORT = 3000;
// function calculate(n) {
//   let ans = 0;
//   for (let index = 0; index < n; index++) {
//     ans = ans + index;
//   }
//   return ans;
// }
// app.get("/:number/:name", (req, res) => {
//   let n = req.params.number;
//   const name = req.params.name;
//   const ans = calculate(n);

//   res.send("sum is : " + ans + " this persone send this : " + name);
// });
// app.get("/query-parameter", (req, res) => {
//   res.send(req.query);
//   console.log(req.query);
// });

// ! Methods starts
/* GET      ->  it's like going for a cunsultation for chechup */
/* POST     ->  it's like going to get a new kidney inserted */
/* PUT      ->  it's like going to get a kidney replace */
/* DELETE   ->  it's like going to get a kidney removed */
// ! methods ends

// ! Status Code starts

/* 
200    ->  Everything is okay
404    ->  Doctro is not in hospital
500    ->  mid surgery light went away
411    ->  inputes were incorrect, wrong person came to surgery
403    ->  you were not allowed in the hospital 
*/
// ! Status Code ends
/******************************************************************************************************/
// ! a game in which we can insert delete or update means make it in good condition (The kidney Game)

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
  {
    name: "mike",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
  {
    name: "nike",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: false,
      },
    ],
  },
];

// ! using middelwere

app.use(express.json());

// ! logic

const nameOfUser = [];
const kidneyCount = [];
const healthyKidneyCount = Array(100).fill(0);

for (let index = 0; index < users.length; index++) {
  nameOfUser[index] = users[index].name;
  kidneyCount[index] = users[index].kidneys.length;
  for (let i = 0; i < kidneyCount[index]; i++) {
    if (users[index].kidneys[i].healthy) {
      healthyKidneyCount[index]++;
    }
  }
}

// ! now write a code for john how many kidneys he have and how many of them are healthy

app.get("/", (req, res) => {
 
  res.send("")
});

app.post("/", (req, res) => {
  for (let index = 0; index < users.length; index++) {
    const isHealthy = req.body.isHealthy;

    for (let index = 0; index < users.length; index++) {
      users[index].kidneys.push({
        healthy: isHealthy,
      });
    }

    res.send("Done");
  }
});


/*******************************************************************************************************/


// ! make this game again with all edge cases and all the operations
app.listen(PORT, () => {
  console.log("Connected");
});
