import { useState } from "react";
import "../styles/GetAndPost.css";

export default function GetAndPost() {
  const [message, setMessage] = useState("Message will appear here");

  // const getServerStatus = async () => {
  //   try {
  //     const res = await fetch("http://localhost:5555");
  //     const data = await res.json();
  //     setMessage(data.message);
  //   } catch (error) {
  //     setMessage(error.message);
  //   }
  // };

  // const getNames = async () => {
  //   try {
  //     const res = await fetch("http://localhost:5555/names");
  //     const data = await res.json();
  //     setMessage(data.result);
  //   } catch (error) {
  //     setMessage(error.message);
  //   }
  // };

  const setName = () => {
    fetch("http://localhost:5555/name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Noah",
        company: "kodex",
      }),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => setMessage(error.message));
  };

  // useEffect(() => {
  //   fetchMessage();
  // }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>React + Express Demo</h1>
        <p>{message}</p>
        <button className="fetch-button" onClick={setName}>
          Fetch Message
        </button>
      </div>
    </div>
  );
}
