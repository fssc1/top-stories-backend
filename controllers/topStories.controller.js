const axios = require('axios')
require('dotenv').config()
const stories_url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NY_API_KEY}`
async function getStories(req, res) {
    try {
        const response = await axios.get(stories_url)
        if (!response.status === 200) return res.status(200).json({ message: 'API Request Failed' })
        const stories = response?.data?.results
        console.log(stories)
        return res.status(200).json({ status: "success", stories })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}


module.exports = { getStories }