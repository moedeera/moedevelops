import { Form } from "../../Components/Form/Form";
import { Segment3 } from "../../Components/Segment3/Segment3";
import "./Contact.css";

export const Contact = () => {
  const info = {
    small: "One Message Away",
    header: "Got Any Questions or Concerns? Just send a message",
    text: `Need a job done? Would like a second opinion? Employment Opportunity? Just Send me a message and I will get back to you as soon as possible`,
  };
  return (
    <div className="page-container form-page">
      <Segment3 info={info} />
      <Form />
    </div>
  );
};
