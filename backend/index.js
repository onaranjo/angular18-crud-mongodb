require('dotenv').config();

const PORT = process.env.PORT;

require('./configs/dbConnection')

const express = require('express');

const app = express();
app.get("/", (req, res) => {
    res.send("API Working");
});

const users = require('./routes/UserRoute')

app.use("/api/", users);


app.listen(PORT, () => {

    console.log("Server is running in PORT: " + PORT);
});
