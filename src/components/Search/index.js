import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunk";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonsThunk(input, setError));
    setInput("");
  };

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite aqui o nome do seu Digimon ou o level"
        />
        <button onClick={() => handleSearch()}>Pesquisar</button>
      </div>
      {error && <h4>Digimon não encontrado!</h4>}
    </div>
  );
};
export default Search;
