import "./Segment3.css";
export const Segment3 = ({ info }) => {
  return (
    <div className="segment-3">
      <small>{info.small}</small>
      <h1>{info.header}</h1>
      <p>{info.text}</p>
    </div>
  );
};
