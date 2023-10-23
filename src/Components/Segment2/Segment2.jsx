import { Link } from "react-router-dom";
import "./Segment2.css";

// eslint-disable-next-line react/prop-types
export const Segment2 = ({ info }) => {
  return (
    <div className="segment-2">
      <div className="segment-2-upper">
        <h1>{info.header}</h1>
      </div>
      <div className="segment-2-lower">
        {info.texts.map((text, index) => (
          <div key={index} className="segment-2-ls">
            <h3>{text.header}</h3>
            <p>{text.text}</p>
            {text.button && (
              <Link to={`${text.link}`} className="btn">
                {text.button}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
