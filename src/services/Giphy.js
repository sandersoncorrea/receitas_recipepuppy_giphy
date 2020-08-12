import axios from 'axios'

async function getGif(ingredientes) {
    const response = await axios.get(process.env.GIPHY_URL, {
        params: {
            api_key: process.env.GIPHY_KEY,
            q: ingredientes,
            limit: 10,
            language: 'pt',
        },
    })
    return response.data
}

export default getGif
