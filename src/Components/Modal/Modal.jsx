import { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [noInterest, setNoInterest] = useState(false);
  return (
    <div className="modal-container h-full w-screen absolute top-0">
      <div className="modal-component flex flex-col p-10 ">
        <h1 className="text-3xl m-bottom-10 pb-4 text-center">
          Thanks for visiting !
        </h1>
        <h3 className="text-2xl ">
          If you have a moment, could you please state if you are still
          interested in my services? If not, please share the reason why.
        </h3>
        {!noInterest && (
          <div className="pt-5 pb-3 flex gap-10 justify-center ">
            <button className="btn btn-success ">Still Interested</button>
            <button
              className="btn btn-neutral"
              onClick={() => {
                setNoInterest(true);
              }}
            >
              Not Interested
            </button>
          </div>
        )}

        {noInterest && (
          <div className="submission-area">
            <h3 className="text-xl pt-4 pb-2">Please share you reasons</h3>
            <textarea className="p-5 mb-3" name="" id="" rows={3}></textarea>
            <button className="btn">Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
