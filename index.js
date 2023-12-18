import express from "express";
import axios from "axios";
// import bodyParser from "express";

const app = express();
const port = 3000;

const URL = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(URL);
        const result = response.data;

        res.render("index.ejs", {
            secret: result.secret,
            user: result.username
        })
    } catch (error) {
        console.log(error.message)
        res.send(500)
    }
})

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}....`)
})
