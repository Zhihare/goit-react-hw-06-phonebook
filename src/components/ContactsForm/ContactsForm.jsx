import React, { useState } from 'react'

import { ContainerContactsForm, ContainerContactsLabel, ConteinerContactsButton, ConteinerContactsInput } from './CotactsFormStyle';

export const ContactsForm = ({ handleAddContacts }) => {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');


	const handleNameChenge = event => {
		setName(event.target.value)
	}

	const handleNumberChenge = event => {
		setNumber(event.target.value)
	}


	const handleSubmit = event => {
		event.preventDefault();
		handleAddContacts(name, number);
		setName('');
		setNumber('');

	}
	return (
		<ContainerContactsForm onSubmit={handleSubmit}>
			<ContainerContactsLabel>
				<span>Name</span>
				<ConteinerContactsInput onChange={handleNameChenge} value={name} type="text" name="name" required />
			</ContainerContactsLabel>
			<ContainerContactsLabel>
				<span>Number</span>
				<ConteinerContactsInput onChange={handleNumberChenge} value={number} type="tel" name="number" required />
			</ContainerContactsLabel>
			<ConteinerContactsButton type="submit" >Add contact</ConteinerContactsButton>
		</ContainerContactsForm >
	)
}

