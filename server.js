const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.static("public"));

app.get("/weather", async (req, res) => {
    const city = req.query.city;
    const key = process.env.API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.json({ error: "Something went wrong" });
    }
});

app.listen(process.env.PORT, () => {
    console.log("Server running on http://localhost:3000");
});
