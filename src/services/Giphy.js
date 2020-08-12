import axios from 'axios'
const url = 'http://api.giphy.com/v1/gifs/search'

async function getGif(ingredientes) {
    const response = await axios.get(url, {
        params: {
            api_key: '40ckHP8VHzKQKG6wCeLbWdMvvXjNq8fd',
            q: ingredientes,
            limit: 10,
            language: 'pt',
        },
    })
    return response.data
}

export default getGif
