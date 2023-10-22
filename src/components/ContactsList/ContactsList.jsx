import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ContactsListButton, ContactsListContainer, ContactsListName } from './ContactsListStyle';
import { useDispatch, useSelector } from "react-redux";
import { setModalDelete, setModalDeleteData } from 'redax/contactsReduser';

export const ContactsList = () => {

	const contacts = useSelector((state) => state.contacts.contacts);
	const filter = useSelector((state) => state.contacts.filter);

	const dispatch = useDispatch();


	const onOpenModalDelete = (modalDataDelete) => {
		dispatch(setModalDelete(true));
		dispatch(setModalDeleteData(modalDataDelete));
	}

	const getContacts = () => {
		const normalizedFilter = filter.toLowerCase();
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normalizedFilter)
		);
	};

	const filterContacts = getContacts();

	return (
		<ContactsListContainer>
			{filterContacts.map(({ name, number, id }) => {
				return (
					<ContactsListName key={id}>
						<p>{name}: {number}</p>
						<ContactsListButton onClick={() => onOpenModalDelete(name)}><RiDeleteBin6Line /> </ContactsListButton>
					</ContactsListName>
				);
			})
			}
		</ContactsListContainer>
	);
};
