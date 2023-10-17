import styled from 'styled-components';

export const ContainerContactsForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
	gap: 10px;

`

export const ContainerContactsLabel = styled.label`
	display: flex;
    flex-direction: column;
    align-items: flex-start;
	gap: 3px;
`

export const ConteinerContactsInput = styled.input`
    background-color: ${(props) => props.theme.themes.tagLineColor};
    border-style: ridge;
    color: ${(props) => props.theme.themes.titleColor}
`

export const ConteinerContactsButton = styled.button`
  padding: 20px;
  position: relative;
  font-size: 16px;
  border: none;
  color: ${(props) => props.theme.themes.buttonColor};
  background-color: transparent;
  cursor: pointer;
  margin: 10px;
  transform: translateY(0px);
  transition: transform .3s;

  &:focus,
  &:active {
    outline: none;
    transform: translateY(-3px);
  }


 
    &::before{
      content: "";
      height: 20px;
      width: 20px;
      border: 2px solid ${(props) => props.theme.themes.buttonColor};
      border-color: ${(props) => props.theme.themes.buttonColor} ${(props) => props.theme.themes.buttonColor} transparent transparent; 
      position: absolute;
      top: 0px;
      right: 0px;
      transition-property: height, width;
      transition-duration: .3s;
    }
    &::after{
      content: "";
      height: 20px;
      width: 20px;
      border: 2px solid black;
      border-color: transparent transparent ${(props) => props.theme.themes.buttonColor} ${(props) => props.theme.themes.buttonColor}; 
      position: absolute;
      bottom: 0px;
      left: 0px;
      transition-property: height, width;
      transition-duration: .3s;
    }
    &:hover{
      &::before,
      &::after
      {
        height: 94%;
        width: 98%;
      }
    }
  }
  &--inner-shadow-border {
    border: 1px solid ${(props) => props.theme.themes.buttonColor};
    transition: box-shadow .3s;
    position: relative;
    &::before {
      content: "";
      height: 100%;
      width:100%;
      position: absolute;
      border: 1px solid ${(props) => props.theme.themes.buttonColor};
      top: 0px;
      left: 0px;
      transition-property: transform,border-color;
      transition-duration: .4s;
    }
    &:hover{
      box-shadow: inset 0 0 .5rem #fff;
      &::before {
        transform: scale(1.2);
        border-color: transparent;
      }
    }
  }
`