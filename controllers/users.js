const db = require("../db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await db.one(`SELECT * FROM users WHERE username=$1`, username);
  if (user && user.password === passowrd) {
    const payload = {
      id: user.id,
      username,
    };
    const { SECRET } = process.env;
    const token = jwt.sign(payload, SECRET);

    console.log(token);

    await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user.id, token])
    res.status(200).json({});
  } else {
    res.status(400).json({ msg: "username or password incorrect." });
  }
};

module.exports = { login };
