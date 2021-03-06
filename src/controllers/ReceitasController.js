import getReceitas from '../services/RecipePuppey'
import getGif from '../services/Giphy'

class ReceitasController {
    async index(req, res) {
        const { i } = req.params
        const ingredientes = i.split(',').sort()
        try {
            const recipes = await getReceitas(i)

            for (const recipe of recipes.results) {
                const gif = await getGif(recipe.title)
                recipe.gif = gif.data[0].bitly_gif_url
            }

            return res.status(200).json({
                keywords: ingredientes,
                recipes: recipes.results.map((r, index) => {
                    return {
                        title: r.title,
                        ingredients: r.ingredients,
                        link: r.href,
                        gif: r.gif,
                    }
                }),
            })
        } catch (error) {
            return res.status(500).json({
                keywords: ingredientes,
                message: 'Erro ao requisitar receitas',
                error,
            })
        }
    }
}

export default new ReceitasController()
