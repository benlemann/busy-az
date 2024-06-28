require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

const { connection } = require("./db");
connection();

const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(methodOverride("_method", {
    methods: ["POST", "GET"]
}));

const { requestNotify } = require("./middlewares/notify")

const userRoute = require("./routes/userRoute").router;
const checkRoute = require("./routes/checkRoute").router;
const vacancyRoute = require("./routes/vacancyRoute").router;

app.use("/api/user", requestNotify, userRoute);
app.use("/api/check", requestNotify, checkRoute);
app.use("/api/vacancy", requestNotify, vacancyRoute);