import { useEffect, useRef, useState } from "react";
import "./Modal.css";
import { Loading } from "../Loading/Loading";
import { onSubmit } from "../../utils/Functions";
import { Link } from "react-router-dom";

const Modal = ({ setShowModal }) => {
  const [noInterest, setNoInterest] = useState(false);
  const [interest, setInterest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [visitorEmailOrCompany, setVisitorEmailOrCompany] = useState(null);
  const childRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (childRef.current && !childRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [childRef]);

  const onChangeHandler = (e, type) => {
    if (type === "name") {
      setVisitorEmailOrCompany(e.target.value);
    } else if (type === "message") {
      setMessage(e.target.value);
    }
  };

  const handleOnSubmit = async () => {
    setLoading(true);
    try {
      let successMessage = {
        name: "Visitor",
        message: message ? message : "Interested in services",
        email: visitorEmailOrCompany ? visitorEmailOrCompany : "Anonymous",
      };
      await onSubmit(successMessage);
      setSuccess(true);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-container h-full w-screen absolute top-0">
      <div ref={childRef} className="modal-component flex flex-col p-10 ">
        {success && (
          <div>
            <h3 className="text-3xl text-center">
              Thanks for completing the form!
            </h3>
            <h3 className="text-2xl text-center py-4">
              Click{" "}
              <span
                onClick={() => {
                  setShowModal(false);
                }}
                style={{ color: "blue", cursor: "pointer" }}
              >
                Here
              </span>{" "}
              to return
            </h3>
          </div>
        )}
        {error && (
          <div>
            <h3 className="text-3xl text-center">
              Sorry, it looks like there was an error sending your
              message.Please try again in the
              <Link to="/">Contact Page</Link>
            </h3>
            <h3 className="text-2xl text-center py-4">
              Click{" "}
              <span
                onClick={() => {
                  setShowModal(false);
                }}
                style={{ color: "blue", cursor: "pointer" }}
              >
                Here
              </span>{" "}
              to return
            </h3>
          </div>
        )}
        {loading && !success && !error && <Loading />}
        {!loading && !success && !error && (
          <>
            {" "}
            <h1 className="text-3xl m-bottom-10 pb-4 text-center">
              Thanks for visiting !
            </h1>
            <h3 className="text-2xl text-center w-86 m-auto">
              If you have a moment, could you please state if you are still
              interested in my services?
              <br /> If not, please share the reason why.
            </h3>
            <div className="flex gap-2 flex-wrap items-center pb-4 pt-6">
              <label className="">Email or Company (optional)</label>
              <input
                type="name"
                className="p-2"
                value={visitorEmailOrCompany}
                onChange={(e) => {
                  onChangeHandler(e, "name");
                }}
              />
            </div>
            {!noInterest && (
              <div className="pt-5 pb-3 flex gap-10 justify-center ">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    handleOnSubmit();
                  }}
                >
                  Interested
                </button>
                <button
                  className="btn btn-neutral"
                  onClick={() => {
                    setNoInterest(true);
                  }}
                >
                  No Thanks
                </button>
              </div>
            )}
            {noInterest && (
              <div className="submission-area flex flex-col gap-3">
                <h3 className="text-xl pt-4 pb-2">Please share you reasons</h3>
                <>
                  <textarea
                    className="p-5 mb-3"
                    name=""
                    id=""
                    rows={3}
                    value={message}
                    onChange={(e) => {
                      onChangeHandler(e, "message");
                    }}
                  ></textarea>

                  <button
                    className="btn"
                    onClick={() => {
                      handleOnSubmit();
                    }}
                  >
                    Submit
                  </button>
                </>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
