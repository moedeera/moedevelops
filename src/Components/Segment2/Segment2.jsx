import "./Segment2.css";

export const Segment2 = ({ info }) => {
  return (
    <div className="segment-2">
      <div className="segment-2-upper">
        <h1>{info.header}</h1>
      </div>
      <div className="segment-2-lower">
        {info.texts.map((text) => (
          <div key={text.header} className="segment-2-ls">
            <h3>{text.header}</h3>
            <p>{text.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
