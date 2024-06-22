require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

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

app.use("/api/user", userRoute);