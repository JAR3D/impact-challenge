import { useEffect, useState } from "react";

import { fetchBeers } from "./api";

import BeerList from "./components/BeerList/BeerList";
import BeerDetails from "./components/BeerDetails/BeerDetails";
import AddBeerForm from "./components/AddBeerForm/AddBeerForm";

import classes from "./App.module.css";

function App() {
  const [beerList, setBeerList] = useState([]);
  const [selected, setSelected] = useState(null);

  const getBeers = async () => {
    const { data } = await fetchBeers();
    setBeerList(data);
  };

  const addBeer = (beer) => {
    setBeerList([...beerList, beer]);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>My Beer Cellar</h1>
      <AddBeerForm addBeer={addBeer} />
      <hr />
      <div className={classes.action}>
        <BeerList list={beerList} onClick={setSelected} />
        {selected !== null ? (
          <BeerDetails
            name={beerList[selected].name}
            description={beerList[selected].description}
            labels={beerList[selected].labels}
          />
        ) : (
          <p className={classes["none-selected"]}>Please select a beer</p>
        )}
      </div>
    </div>
  );
}

export default App;
