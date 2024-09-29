const express = require('express');
const bp = require('body-parser');
const jwt = require('jsonwebtoken');
const jwtPassword = "akashjwtpass";

const app = express();
app.use(bp.json());
const zod = require("zod");

const allusers = [
  {
    username: "akash",
    password: "Akashmalik",
  },
  {
    username: "ahmad",
    password: "MalikAhmad",
  },
  {
    username: "smmalik",
    password: "ShahidMalik",
  },
];

const validPass = zod
  .string()
  .min(8, { message: "Password length must be 8 minimum" })
  .refine((val) => /^[A-Z]/.test(val), {
    message: "First letter must be A, B, or C",
  });

function userexists(user, passw) {
//   for (let i = 0; i < allusers.length; i++) {
//     if (allusers[i].username == user && allusers[i].password == passw) {
//       return true;
//     }
//   }
const result = allusers.find(({ username , password}) => username === user && password===passw);
console.log(result);

  return result;
}

// sends username & password , gets returned by a token in jwt , can be used to extrac t values back
app.post("/", (req, res) => {
  const user = req.headers.username;
  const passw = req.headers.password;
  if (validPass.safeParse(passw).success) {
    if (userexists(user, passw)) {
      const tokenn = jwt.sign({ username: user }, jwtPassword);
      res.status(200).send("Hello User , here is your token \n" + tokenn);
    } else res.status(403).send("User doesnt Exist");
  } else {
    res.status(403).send(validPass.safeParse(passw));
  }
});

// needs input the authorization token of user and password
app.get("/users", (req, res) => {
  const token = req.headers.auth;
  try{
   var auth = jwt.verify(token, jwtPassword); // var auth
  }
  catch(err){
return res.status(403).json({ msg: "Invalid token sent"})
  }
  res.json({
    users: allusers.filter((value) => {
      if (value.username == auth.username) return false;
      else return true;
    }),
  });
});

app.listen(3000, () => {
  console.log("server started");
});
