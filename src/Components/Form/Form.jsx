import "./Form.css";
export const Form = () => {
  return (
    <div className="form">
      <div className="input-section">
        <div className="input-label">Name or Company</div>
        <input type="text" placeholder="name" />
      </div>
      <div className="input-section">
        {" "}
        <div className="input-label">Email</div>
        <input type="text" placeholder="email" />
      </div>
      <div className="text-section">
        <div className="input-label">Message</div>
        <textarea />
      </div>
    </div>
  );
};
