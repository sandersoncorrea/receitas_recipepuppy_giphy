import getReceitas from "../Services/RecipePuppey";
import getGif from "../Services/Giphy";

class ReceitasController {
  async index(req, res) {
    const ingredientes = req.params.i;

    const recipes = await getReceitas(ingredientes);
    const gifs = await getGif(ingredientes);

    return res.status(200).json({
      keywords: ingredientes.split(","),
      recipes: recipes.results.map((r, index) => {
        return {
          title: r.title,
          ingredients: r.ingredients,
          link: r.href,
          gif: gifs.data[index].bitly_gif_url,
        };
      }),
    });
  }
}

export default new ReceitasController();
