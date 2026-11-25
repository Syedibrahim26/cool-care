const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("CoolCare Backend is running!");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`CoolCare server running on port ${PORT}`);
});