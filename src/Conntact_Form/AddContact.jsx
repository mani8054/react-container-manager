import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { useNavigate } from "react-router-dom";
import "./NavbarCss/AddContact.css";
import DisplayContact from "./DisplayContact";

const AddContact = () => {
  const navigate = useNavigate();
  const { record, setRecord } = useContext(ThemeContext);

  const [cname, setCname] = useState("");
  const [cemail, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handle = (e) => {
    e.preventDefault();

    const data = {
      id: Date.now().toString(),
      cname,
      cemail,
      phone,
    };

    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((newData) => {
        setRecord([...record, newData]);
        navigate("/displayContact");
      })
      .catch((err) => console.error("Error adding contact:", err));

    setCname("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="container">
      <h2>Add Contact</h2>

      <form onSubmit={handle}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
            placeholder="Enter Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={cemail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Phone"
            required
          />
        </div>

        <button type="submit">Add Contact</button>
      </form>
      {/* <DisplayContact deletedContact={deletedContact}/> */}
    </div>
  );
};

export default AddContact;
