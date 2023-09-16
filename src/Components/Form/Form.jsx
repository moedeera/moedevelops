import "./Form.css";
export const Form = () => {
  return (
    <div className="form">
      <div className="input-section">
        <div className="input-label">Name or Company</div>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div className="input-section">
        {" "}
        <div className="input-label">Email</div>
        <input type="text" placeholder="Enter an Email" />
      </div>
      <div className="text-section">
        <div className="input-label">Message</div>
        <textarea placeholder="Type in message" cols={40} rows={7} />
      </div>
      <button className="btn">Submit</button>
    </div>
  );
};
