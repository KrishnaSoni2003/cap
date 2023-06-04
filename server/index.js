import express from "express";
import mongoose from "mongoose";
import cors from 'cors'

import podcastRoutes from "./routes/podcasts.js"
// import { getPodcasts } from "./controllers/podcasts.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is a POD API")
})

app.use('/api',podcastRoutes);
// app.get('/api/get-podcasts', getPodcasts);

const PORT = 5000

const DATABASE_URL = "mongodb+srv://admin:admin@cluster0.qte3tmz.mongodb.net/"

mongoose.set("strictQuery", true)
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))