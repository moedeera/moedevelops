import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";

const messageData = collection(db, "messages");

const onSubmit = async (msg) => {
  try {
    const currentDate = new Date();

    const month = currentDate.toLocaleString("default", { month: "long" });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    const amPm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12; // Convert to 12-hour format

    const minute = currentDate.getMinutes();

    const currentDateTime = `${month} ${day} ${year} @ ${hour}:${minute} ${amPm}`;

    await addDoc(messageData, {
      name: msg.name,
      message: msg.message,
      email: msg.email,
      date: currentDateTime,
      dateIndex: currentDate,
    });

    console.log("message sent");
  } catch (error) {
    console.log(error);
  }
};

export { onSubmit };
