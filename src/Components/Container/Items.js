import "./Items.css";
import { Link } from "react-router-dom";

const Items = ({ title, artist, price, description, category, id }) => {
    return (
      <div className="cards">
        <h3 className="cardTitle">
          <Link to={`/details/${id}`}>{title}</Link>
        </h3>
  
        <h3>{artist}</h3>
  
        <h5>{price}</h5>

        <p>IMAGEN</p>
  
        <h5>{description}</h5>
  
        <p>{category}</p>

      </div>
    );
  };

export default Items