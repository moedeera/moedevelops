import { Link } from "react-router-dom";
import "./Segment5.css";

export const Segment5 = ({ info }) => {
  return (
    <div className="segment-5">
      {info.map((item) => (
        <div key={item.id} className="segment-5-box">
          <small style={{ backgroundColor: `${item.color}` }}>
            {item.small}
          </small>
          <h3>{item.header}</h3>
          <p>{item.text}</p>
          <div className="segment-5-button-container">
            <Link to={`${item.link1}`} className="btn">
              {item.button1}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
