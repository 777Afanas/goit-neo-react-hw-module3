import { useEffect, useState } from "react";
import initialContacts from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import style from "./App.module.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    } else {
      return initialContacts;
    }
  });

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) =>
        contact.id !== contactId);
    });
  };

  // useEffect(() => {
  //   window.localStorage.setItem("saved-feedback", JSON.stringify(values));
  // }, [values]);

  // const updateFeedback = (feedbackType) => {
  //   setValues({
  //     ...values,
  //     [feedbackType]: values[feedbackType] + 1,
  //   });
  // };
  const visibleContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(search?.toLowerCase()),
  );

  return (
    <div className={style.app}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
