const express = require("express");
const app = express();
const port = 3000;
const {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} = require("./index");

app.use(express.json());

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets/:id", deleteById);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});