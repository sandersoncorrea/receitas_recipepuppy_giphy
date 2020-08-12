import axios from 'axios'

async function getReceitas(ingredientes) {
    try {
        const response = await axios.get(process.env.RECIPEPUPPY_URL, {
            params: {
                i: ingredientes,
                p: 3,
                format: 'json',
            },
        })
        return response.data
    } catch (error) {
        throw error
    }
}

export default getReceitas
