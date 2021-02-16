import "./BeerList.module.css";
const BeerList = ({ list, onClick }) => {
  if (list.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {list.map((beer, idx) => {
        return (
          <li key={beer.name} onClick={() => onClick(idx)}>
            {beer.nameDisplay}
          </li>
        );
      })}
    </ul>
  );
};

BeerList.defaultProps = {
  list: [],
};

export default BeerList;
