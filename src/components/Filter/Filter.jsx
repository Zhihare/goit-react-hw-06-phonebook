
import React from 'react'
import { FilterInput, FilterLabel, FilterSpan } from './FilterStyle'
import { BsSearch } from 'react-icons/bs';

export const Filter = ({ value, filter }) => {

	return (
		<FilterLabel>
			<FilterSpan><BsSearch /></FilterSpan>
			<FilterInput type="text"
				name="filter"
				title="Enter search name"
				onChange={filter}
				value={value}
				required />
		</FilterLabel>

	)
}
