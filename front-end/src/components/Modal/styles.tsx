import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

export const StyledTitle = styled.h5`
  font-size: 1.3rem;
  color: #3a3a3a;
`;

export const StyledDescription = styled.div`
  font-size: 1.1rem;
  width: 80%;
  height: 200px;
  color: #474747;
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
