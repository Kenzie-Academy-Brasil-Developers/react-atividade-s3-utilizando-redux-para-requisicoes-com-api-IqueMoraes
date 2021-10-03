import axios from "axios";

import { addDigimon } from "./action";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((response) => {

      let filtro = response.data.filter(
        (item, index) => {
            if(item.name.toLowerCase() === digimon.toLowerCase() ){
                return item
            }
            else if(item.level.toLowerCase() === digimon.toLowerCase() ){
                return item
            }
        }

      )
        
    //   console.log(filtro);
        dispatch(addDigimon(filtro));
    })
    .catch((_) => setError(true));
};

export default addDigimonsThunk;
