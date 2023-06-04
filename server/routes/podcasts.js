import express from "express"
import {getPodcasts} from "../controllers/podcasts.js"
const router = express.Router();

router.get('/get-podcasts',getPodcasts);

export default router;