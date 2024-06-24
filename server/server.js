require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

const corsOptions = {
    origin: "http://localhost:3000/",
    credentials: true
};

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

const userRoute = require("./routes/userRoute").router;
const announcementRoute = require("./routes/announcementRoute").router;

app.use("/api/user", userRoute);
app.use("/api/announcement", announcementRoute);