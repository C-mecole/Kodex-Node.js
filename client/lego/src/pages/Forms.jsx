import { useState } from "react";
import "../styles/Forms.css";

export default function Forms() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [response, setResponse] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send JSON data
  const sendJSON = async () => {
    const res = await fetch("http://localhost:5555/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setResponse(data);
  };

  // Send Form-Encoded Data
  const sendForm = async () => {
    const formBody = new URLSearchParams(formData).toString();

    const res = await fetch("http://localhost:5555/submit", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    });
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div className="container">
      <h2>Send Data to Express</h2>
      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button onClick={sendJSON}>Send as JSON</button>
      <button onClick={sendForm}>Send as Form-Encoded</button>

      {response && (
        <div>
          <h3>Server Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
