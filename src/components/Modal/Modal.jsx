import React, { useEffect } from 'react'
import { Overlay, ModalWindow, ModalTitle } from './ModalStyle'
import { ConteinerContactsButton } from 'components/ContactsForm/CotactsFormStyle';

export function Modal({ onCloseModal, newContactName }) {
	const onKeyDown = event => {
		if (event.code === 'Escape') {
			onCloseModal();
		}
	};

	const onOverlayClick = event => {
		if (event.currentTarget === event.target) {
			onCloseModal();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
		}
	});


	return (
		<Overlay onClick={onOverlayClick}>
			<ModalWindow>
				<ModalTitle>New contact {newContactName} added to the list</ModalTitle>
				<ConteinerContactsButton type="button"

					style={{
						width: '150px', height: '60px',
					}}
					onClick={() => onCloseModal()}>OK</ConteinerContactsButton>
			</ModalWindow>
		</Overlay>
	)
}

