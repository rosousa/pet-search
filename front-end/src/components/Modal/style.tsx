import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

export const StyledTitle = styled.h5`
  font-size: 22px;
  color: #000;
`;

export const StyledDescription = styled.div`
  /* background-color: red; */
  font-size: 18px;
  width: 80%;
  height: 200px;
  overflow: hidden;
`;

export const StyledModal = Modal.styled`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 400px;
  border-radius: 6px;
  padding: 10px;
`;
