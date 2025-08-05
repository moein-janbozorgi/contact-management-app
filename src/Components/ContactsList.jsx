import { useContext, useState } from "react";
import { ContContext } from "../Context/ContactContext";

import styles from "./ContactsList.module.css";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

function ContactsList() {
  const { state, dispatch } = useContext(ContContext);
  const { contacts } = state;
  const [selectDelete, setSelectDlete] = useState(false);
  const [search, setSearch] = useState("");
  const [choseDelete, setChoseDelete] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);

  const filteredContacts = search
    ? contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(search.toLowerCase().trim()) ||
          contact.email.toLowerCase().includes(search.toLowerCase().trim()) ||
          contact.lastName
            .toLowerCase()
            .includes(search.toLowerCase().trim()) ||
          contact.phone.includes(search.trim())
      )
    : contacts;

  return (
    <div className={styles.container}>
      <h3>Contact List</h3>
      <SearchBox
        search={search}
        setSearch={setSearch}
        setSelectDlete={setSelectDlete}
        setchoseDelete={setChoseDelete}
        selectDelete={selectDelete}
      />
      <ul className={styles.contacts}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <ContactItem
              contact={contact}
              key={contact.id}
              selectDelete={selectDelete}
              choseDelete={choseDelete}
              setchoseDelete={setChoseDelete}
              selectedContacts={selectedContacts}
              setSelectedContacts={setSelectedContacts}
            />
          ))
        ) : (
          <p>No contacts found.</p>
        )}
      </ul>
    </div>
  );
}

export default ContactsList;
