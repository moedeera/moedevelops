import "./Segment1.css";

export const Segment1 = ({ info }) => {
  return (
    <div className="segment-1">
      <div>
        <h1>{info.header}</h1>
      </div>
      <div className="segment-1-text">
        <p>{info.text}</p>
        <button className="btn">{info.button}</button>
      </div>
    </div>
  );
};
