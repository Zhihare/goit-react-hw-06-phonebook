import { useEffect, useState } from "react"
import { GoSun } from 'react-icons/go';
import { HiMoon } from 'react-icons/hi';
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { ConteinerApp, ContentApp, TitleApp, ToogleDarkMode } from "./AppStyle";
import { Modal } from "./Modal/Modal";
import { ModalDelete } from "./ModalDelete/ModalDelete";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "constants/DarkMode";
import { nanoid } from "nanoid";


export function App() {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalDeleteData, setModalDeleteData] = useState(null);

  const [themes, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : LightTheme;
  });


  useEffect(() => {
    const stringifiedTheme = JSON.stringify(themes);
    localStorage.setItem('theme', stringifiedTheme);

    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);

  }, [contacts, themes])


  const onOpenModal = (modalData) => {
    setModal(true);
    setModalData(modalData);
  }


  const handleAddContact = (name, number) => {

    if (contacts.some(contact => contact.name === name)) {
      alert(` A contact has already been created for this name: ${name}`);
      return;
    }
    if (contacts.some(contact => contact.number === number)) {
      alert(` A contact has already been created for this number: ${number}`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    onOpenModal(name);
    setContacts(prevState => [
      ...prevState,
      newContact,
    ]);

    reset();
  };


  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const reset = () => {
    setFilter('');
  };


  const changeFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };


  const handleDelete = contactName => {
    setContacts(
      contacts.filter(contact => contact.name !== contactName),
    );
  }

  const onCloseModal = () => {
    setModal(false);
    setModalData(null);
  }

  const onOpenModalDelete = (modalDataDelete) => {
    setModalDelete(true);
    setModalDeleteData(modalDataDelete);
  }

  const onCloseModalDelete = () => {
    setModalDelete(false);
    setModalDeleteData(null);
  }


  const changeTheme = () => {
    if (themes === LightTheme) {
      setTheme(DarkTheme);
      return;
    }
    if (themes !== LightTheme) {
      setTheme(LightTheme);
      return;
    }
  };


  const filterContacts = getContacts();

  const icon = themes === LightTheme ?
    <HiMoon size={30} /> :
    <GoSun size={30} />;

  return (
    <ThemeProvider theme={{ themes }} >
      <ConteinerApp>
        <ContentApp>
          <TitleApp title="Phonebook">Phonebook</TitleApp>
          <ContactsForm handleAddContacts={handleAddContact} />
          <TitleApp>Contacts</TitleApp>
          <Filter value={filter} filter={changeFilter} />
          <ContactsList
            renderFilter={filterContacts}
            onOpenModalDelete={onOpenModalDelete}
          />
          <ToogleDarkMode onClick={changeTheme}>{icon}</ToogleDarkMode>

          {modal && <Modal
            newContactName={modalData}
            onCloseModal={onCloseModal} />}

          {modalDelete && <ModalDelete
            handleDelete={handleDelete}
            deleteContact={modalDeleteData}
            onCloseModalDelete={onCloseModalDelete} />}
        </ContentApp>
      </ConteinerApp>
    </ThemeProvider>
  );

};
