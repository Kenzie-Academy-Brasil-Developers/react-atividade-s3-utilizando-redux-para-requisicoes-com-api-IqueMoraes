import axios from "axios";

import { addDigimon } from "./action";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((response) => {
      let filtro = response.data.filter(
        (item) =>
          item.name.toLowerCase().includes(digimon.toLowerCase()) ||
          item.level.toLowerCase().includes(digimon.toLowerCase())
      );

      dispatch(addDigimon(filtro));
    })
    .catch((_) => setError(true));
};

export default addDigimonsThunk;
