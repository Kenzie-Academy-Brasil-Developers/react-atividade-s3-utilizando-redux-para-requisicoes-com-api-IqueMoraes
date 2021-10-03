import { useSelector } from "react-redux";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);
//   console.log(digimons);

  return (
    <div>
      <ul>
        {digimons.map((digimon, index) => (
          <li key={3}>
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
