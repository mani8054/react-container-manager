import React, { useEffect, useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import "./NavbarCss/Display.css";

const DisplayContact = () => {
  const { record, setRecord } = useContext(ThemeContext);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  // ✅ form state
  const [cname, setName] = useState("");
  const [cemail, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((res) => res.json())
      .then((data) => setRecord(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // ✅ filter
  const filteredData = record.filter((item) =>
    item.cname.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ pagination
  const limit = 3;
  const start = (page - 1) * limit;
  const pagination = filteredData.slice(start, start + limit);
  const totalPages = Math.ceil(filteredData.length / limit);

  // ✅ delete
  const deletedContact = (id) => {
    fetch(`http://localhost:3000/contacts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updated = record.filter((item) => item.id !== id);
        setRecord(updated);
      })
      .catch((error) => console.error("error deleting:", error));
  };

  // ✅ edit (load data into form)
  const editData = (item) => {
    setEditId(item.id);
    setName(item.cname);
    setEmail(item.cemail);
    setPhone(item.phone);
  };

  // ✅ update
  const updateContact = () => {
    fetch(`http://localhost:3000/contacts/${editId}`, {
      method: "PUT", // ✅ FIXED
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cname,
        cemail,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((updatedItem) => {
        const updatedList = record.map((item) =>
          item.id === editId ? updatedItem : item
        );
        setRecord(updatedList);

        alert("Updated successfully!");

        // reset form
        setEditId(null);
        setName("");
        setEmail("");
        setPhone("");
      })
      .catch((error) => console.error("error updating:", error));
  };

  return (
    <div>
      {/* ✅ SEARCH */}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <h3>Search </h3>
        <input
          type="text"
          placeholder="Search name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* ✅ EDIT FORM */}
      {editId && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Edit Contact</h3>

            <input
              value={cname}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />

            <input
              value={cemail}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
            />

            <div className="modal-buttons">
              <button onClick={updateContact}>Update</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <h2>Contact List</h2>

        <table border="1px">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>

          <tbody>
            {pagination.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.cname}</td>
                <td>{item.cemail}</td>
                <td>{item.phone}</td>
                <td>
                  <button onClick={() => deletedContact(item.id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => editData(item)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ✅ PAGINATION */}
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DisplayContact;
