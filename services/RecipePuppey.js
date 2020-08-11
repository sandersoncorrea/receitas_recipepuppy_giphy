import axios from "axios";
const url = "http://www.recipepuppy.com/api";

async function getReceitas(ingredientes) {
  const response = await axios.get(url, {
    params: {
      i: ingredientes,
      p: 3,
      format: "json",
    },
  });

  return response.data;
}

export default getReceitas;
