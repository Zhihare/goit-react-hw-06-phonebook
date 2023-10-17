import React from 'react'

import { ConteinerContactsButton } from 'components/ContactsForm/CotactsFormStyle';
import { ModalTitle, ModalWindow, Overlay } from 'components/Modal/ModalStyle';

export function ModalDelete({ handleDelete, onCloseModalDelete, deleteContact }) {

	const deleteNumber = () => {
		handleDelete(deleteContact);
		onCloseModalDelete();
	}




	return (
		<Overlay>
			<ModalWindow>
				<ModalTitle>Are you sure you want to delete {deleteContact}?</ModalTitle>
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
