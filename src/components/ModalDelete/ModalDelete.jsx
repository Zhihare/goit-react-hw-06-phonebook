import React from 'react'

import { ConteinerContactsButton } from 'components/ContactsForm/CotactsFormStyle';
import { ModalTitle, ModalWindow, Overlay } from 'components/Modal/ModalStyle';
import { setDeleteContacts, setModalDelete, setModalDeleteData } from 'redax/contactsReduser';
import { useDispatch, useSelector } from 'react-redux';

export function ModalDelete() {
	const modalDeleteData = useSelector((state) => state.contacts.modalDeleteData);
	const dispatch = useDispatch();

	const handleDelete = contactName => {
		dispatch(setDeleteContacts(contactName));
	}

	const onCloseModalDelete = () => {
		dispatch(setModalDelete(false));
		dispatch(setModalDeleteData(null));
	}

	const deleteNumber = () => {
		handleDelete(modalDeleteData);
		onCloseModalDelete();
	}




	return (
		<Overlay>
			<ModalWindow>
				<ModalTitle>Are you sure you want to delete {modalDeleteData}?</ModalTitle>
				<ConteinerContactsButton type="button"
					style={{
						width: '150px', height: '60px',
					}}
					onClick={() => deleteNumber()}>
					Yes</ConteinerContactsButton>
				<ConteinerContactsButton type="button"
					style={{
						width: '150px', height: '60px',
					}}
					onClick={() => onCloseModalDelete()}
				>No</ConteinerContactsButton>
			</ModalWindow>
		</Overlay>
	)
}
