import "./Segment1.css";

// eslint-disable-next-line react/prop-types
export const Segment1 = ({ info }) => {
  return (
    <div className="segment-1">
      <div>
        <h1>
          {info.header}
          <br />
          {info.header2}
        </h1>
      </div>
      <div className="segment-1-text">
        <p>{info.text}</p>
        <button className="btn">{info.button}</button>
      </div>
    </div>
  );
};
