import styled from 'styled-components';

export const Overlay = styled.div
  `
	 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalWindow = styled.div`

 position: absolute;
  width: 100%;
  max-width: 550px;
  height: 100%;
  max-height: 200px;
  background-color: #fff;
  border-radius: 10px;
  padding: 25px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;

 background-color: ${(props) => props.theme.themes.modalColor};
 color: ${(props) => props.theme.themes.titleColor};

`
export const ModalTitle = styled.p`
width: 100%
`