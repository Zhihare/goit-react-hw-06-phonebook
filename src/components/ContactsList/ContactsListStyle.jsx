import styled from 'styled-components';

export const ContactsListContainer = styled.div`
   
`
export const ContactsListName = styled.div`
     display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ContactsListButton = styled.button`
    border: none;
    background-color: transparent;
	transition-duration: .8s;
    color: ${(props) => props.theme.themes.buttonColor};

	&:hover{
		color:red;
	}
`
