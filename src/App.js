import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";

// Uncomment untuk memuat daftar kontak
import contactJSON from "./data/contacts.json";

console.log(contactJSON);

// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactJSON);

  const handleSubmit = (event) => {
    console.log("event ", event);
    setContacts([...contacts, event]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <ContactForm handleClick={handleSubmit} />
        </Grid>
        <Grid item xs={5} sx={{ marginTop: 8 }}>
          {contacts.map((contact, index) => (
            <Contact key={index} data={contact} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
