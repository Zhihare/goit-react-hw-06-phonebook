import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ContactsListButton, ContactsListContainer, ContactsListName } from './ContactsListStyle';

export const ContactsList = ({ renderFilter, onOpenModalDelete }) => {


	return (
		<ContactsListContainer>
			{renderFilter.map(({ name, number, id }) => {
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
