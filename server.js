const {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
  createImage,
} = require("./controllers/planets");
const login = require("./controllers/users");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/planets", getAll);
app.get("/api/planets/:id", getOneById);
app.post("/api/planets/", create);
app.put("/api/planets/:id", updateById);
app.delete("/api/planets/:id", deleteById);

app.post("/api/planets/:id/image", upload.single("image"), createImage);
app.post("/api/users/login", login);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
