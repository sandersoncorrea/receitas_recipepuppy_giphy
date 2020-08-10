import axios from "axios";
const url = "http://www.recipepuppy.com/api";

const getReceitas = async () => {
  await axios
    .get(url, {
      params: {
        i: "bacon",
        p: 3,
        format: "json",
      },
    })
    .then(function (response) {
      // handle success
      console.log(response.data.results[0].title);
      return response.data.results;
    })
    .catch(function (error) {
      // handle error
      console.log({ error });
    })
    .then(function () {
      // always executed
    });
};

export default getReceitas;
