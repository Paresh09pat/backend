const express = require("express");

const app = express();

const dataRouter = require("./Routes/data");
const dataRouter1 = require("./Routes/bolly");
const dataRouter2 = require("./Routes/hollywood");
const dataRouter3 = require("./Routes/mix");
const dataRouter4 = require("./Routes/footer");
const dataRouter5 = require("./Routes/technology");
const dataRouter6 = require("./Routes/fitness");
const dataRouter7 = require("./Routes/food");

const cors = require("cors");

app.use(cors());

app.use("/api", dataRouter);
app.use("/api", dataRouter1);
app.use("/api", dataRouter2);
app.use("/api", dataRouter3);
app.use("/api", dataRouter4);
app.use("/api", dataRouter5);
app.use("/api", dataRouter6);
app.use("/api", dataRouter7);

app.listen(process.env.PORT || 9000, () => {
  console.log("I am connected");
});
