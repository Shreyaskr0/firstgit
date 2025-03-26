const express = require("express");
const cors = require("cors");
const path = require("path");
const sequelize = require("./utils/database");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});


app.use("/users", userRoutes);


sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch(err => console.log(err));
