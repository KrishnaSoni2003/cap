// import podcastMessage from "../models/podcasts";
import podcastMessage from "../models/podcasts.js"


export const getPodcasts = async (req,res) => {
    try {
        const podcasts= await podcastMessage.find();
        console.log("data",podcasts);
        res.status(200).json(podcasts);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}