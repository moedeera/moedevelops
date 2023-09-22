import "./Segment4.css";
import author from "./author.jpg";

export const Segment4 = ({ info }) => {
  console.log(info);
  return (
    <div className="segment-4">
      <div className="segment-4-text">
        <div className="segment-4-text-quote">{info.quote}</div>
        <div className="segment-4-text-author">
          <div className="segment-4-author-pic">
            <img src={author} alt="author" />
          </div>
          <div className="segment-4-author-info">
            <h3>{info.author}</h3>
            <small>{info.position}</small>
          </div>
        </div>
      </div>
      <div className="segment-4-box"></div>
    </div>
  );
};
