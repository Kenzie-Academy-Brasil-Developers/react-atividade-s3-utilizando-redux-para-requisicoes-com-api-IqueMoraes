import { useSelector } from "react-redux";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);

  return (
    <div>
      <ul>
        {digimons.length < 1 && <li>Digimon não encontrado.</li>}
        {digimons.map((digimon, index) => (
          <li key={index}>
            <div>
              <h2>{digimon.name}</h2>
              <img src={digimon.img} alt={digimon.name}></img>
              <p>Level: {digimon.level}</p>
            </div>
          </li>
         ))} 
        <li></li>
      </ul>
    </div>
  );
};

export default Digimons;
