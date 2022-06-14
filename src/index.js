import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { userFirstname, userLastname, userPhone } = e.target;

    const newUser = {
      firstName: userFirstname.value,
      lastName: userLastname.value,
      phone: userPhone.value,
    };

    addEntryToPhoneBook((prevState) => [...prevState, newUser]);
  };

  return (
    <form style={style.form.container} onSubmit={(e) => handleSubmit(e)}>
      <label>First name:</label>
      <br />
      <input style={style.form.inputs} className="userFirstname" name="userFirstname" type="text" />
      <br />
      <label>Last name:</label>
      <br />
      <input style={style.form.inputs} className="userLastname" name="userLastname" type="text" />
      <br />
      <label>Phone:</label>
      <br />
      <input style={style.form.inputs} className="userPhone" name="userPhone" type="text" />
      <br />
      <input style={style.form.submitBtn} className="submitButton" type="submit" value="Add User" />
    </form>
  );
}

function InformationTable({ phoneBook }) {
  const renderPeople = () =>
    phoneBook.map((entry, index) => (
      <tr key={index}>
        <td>{entry.firstName}</td>
        <td>{entry.lastName}</td>
        <td>{entry.phone}</td>
      </tr>
    ));

  return (
    <>
      <table style={style.table} className="informationTable">
        <thead>
          <tr>
            <th style={style.tableCell}>First name</th>
            <th style={style.tableCell}>Last name</th>
            <th style={style.tableCell}>Phone</th>
          </tr>
        </thead>
        <tbody>{renderPeople()}</tbody>
      </table>
    </>
  );
}

const initialState = { firstName: "Coder", lastName: "Byte", phone: "8885559999" };

function Application(props) {
  const [phoneBook, addEntryToPhoneBook] = useState([initialState]);

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable phoneBook={phoneBook} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
