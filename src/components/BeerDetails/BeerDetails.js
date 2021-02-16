import classes from "./BeerDetails.module.css";

const BeerDetails = ({ name, description, labels }) => {
  return (
    <div className={classes.details}>
      <h2>{name}</h2>
      {labels ? (
        <img src={labels.medium} alt={name} />
      ) : (
        <p>No label available</p>
      )}
      <p>{description ? description : "No description available"}</p>
    </div>
  );
};

export default BeerDetails;
