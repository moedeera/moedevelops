import "./Segment4.css";
import author from "./author.jpg";

export const Segment4 = () => {
  return (
    <div className="segment-4">
      <div className="segment-4-text">
        <div className="segment-4-text-quote">
          “Dribbble is my go-to for hiring designers. It always provides a
          wealth of quality candidates and instantly builds my pipeline.”
        </div>
        <div className="segment-4-text-author">
          <div className="segment-4-author-pic">
            <img src={author} alt="author" />
          </div>
          <div className="segment-4-author-info">
            <h3>Lee Monroe</h3>
            <small>Head of design, OneSignal</small>
          </div>
        </div>
      </div>
      <div className="segment-4-box"></div>
    </div>
  );
};
