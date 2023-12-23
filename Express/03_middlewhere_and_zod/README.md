# Middelwhere

A middelwhere is a normal javascript function which have some logic and that logic can be used in many situations.Simply put write once and use many times.

for example isLogin or not must be checked on the profile page on the registration page and many more scenerios like that so if our all or mazore routes need that type of checking we can do that.

### Understanding Routes

```javascript
app.get("/", (req, res) => {
  console.log("Hellow World");
});
```

this is the mostly used syntex we use but there is more to it. Actually it is like this.

```javascript
app.get("/", (req, res, next) => {
  console.log("Hellow World");
});
```

here is next as it's name suggests it redirect the control to the next function.

and there is more to it. routes does not have only one function it can have a series of functions and the last function will contain the <code>req and res </code> cycle.

for example the routes originally can be written like this.

```javascript
app.get(
  "/test",
  (req, res, next) => {
    // write your logic here
    next();
  },
  (req, res, next) => {
    // write your logic here
    next();
  },
  (req, res) => {
    // write your logic here
    //  here is the end of the cycle
  }
);
```

for to make it look synteticly sugry we can pass the function refrence to the route , then it will loog good.

```javascript
app.get("/test", func_1, func_2, (req, res) => {
  // your code here
});
```

there is one more way in which we can write a middelwhere and in that way we do not even need to write the refrence of that middelwhere

for example.

```javascript
const express = require("express");

const app = express();

function func_1() {
  // some logic here
}

app.use(func_1);

app.get("/one", (req, res) => {
  // some logic here
});
app.get("/two", (req, res) => {
  // some logic here
});
app.get("/three", (req, res) => {
  //some logic here
});

app.listen(3000);
```

in this example after writting this line <code>app.use(func_1);</code> all the routes will implement this middlewhere.

# Better input validation (Zod)

we need to use zod here, zod is a libreary which is responsible to check the types of any varibale or value.


