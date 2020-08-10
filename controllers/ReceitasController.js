import getReceitas from "../Services/RecipePuppey";

class ReceitasController {
  async index(req, res) {
    // const { ingredientes } = req;
    const receitas = await getReceitas().then(function (response) {
      // handle success
      console.log(response);
      // return response.data.results;
    });

    console.log({ receitas });
    return res.status(200).json("receitas");
  }
}

export default new ReceitasController();
