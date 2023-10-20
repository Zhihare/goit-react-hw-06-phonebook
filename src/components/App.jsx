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
import { useDispatch, useSelector } from "react-redux";
import { setContacts, setDeleteContacts, setFilter, setModal, setModalData, setModalDelete, setModalDeleteData, setTheme } from "redax/contactsReduser";


export function App() {

  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const modal = useSelector((state) => state.contacts.modal);
  const modalData = useSelector((state) => state.contacts.modalData);
  const modalDelete = useSelector((state) => state.contacts.modalDelete);
  const modalDeleteData = useSelector((state) => state.contacts.modalDeleteData);
  const themes = useSelector((state) => state.contacts.themes)

  const dispatch = useDispatch();

  const onOpenModal = (modalData) => {
    dispatch(setModal(true));
    dispatch(setModalData(modalData));
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
    dispatch(setContacts(newContact));

    reset();
  };


  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const reset = () => {
    dispatch(setFilter(''));
  };


  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value.toLowerCase));
  };


  const handleDelete = contactName => {
    dispatch(setDeleteContacts(contactName));
  }

  const onCloseModal = () => {
    dispatch(setModal(false));
    dispatch(setModalData(null));
  }

  const onOpenModalDelete = (modalDataDelete) => {
    dispatch(setModalDelete(true));
    dispatch(setModalDeleteData(modalDataDelete));
  }

  const onCloseModalDelete = () => {
    dispatch(setModalDelete(false));
    dispatch(setModalDeleteData(null));
  }


  const changeTheme = () => {
    if (themes === LightTheme) {
      dispatch(setTheme(DarkTheme));
      return;
    }
    if (themes !== LightTheme) {
      dispatch(setTheme(LightTheme));
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
