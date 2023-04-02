import styled from 'styled-components';
import Modal from 'styled-react-modal';

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

export const StyledForm = styled.form`
  /* background-color: slategray; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & button,
  input,
  textarea {
    border-radius: 6px;
    border: 1px solid #c2c2c2;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  & input,
  textarea {
    color: #424242;
  }

  & button {
    color: #fff;
  }

  & input:focus,
  textarea:focus {
    outline: none;
  }

  & textarea::placeholder,
  input::placeholder {
    font-family: 'Roboto', sans-serif;
    color: #a8a8a8;
  }

  & button {
    width: 100%;
    height: 40px;
    font-weight: 700;
    cursor: pointer;
    background-color: #6e95ff;
    transition: 400ms;
  }

  & button:hover {
    filter: brightness(0.8);
  }
`;

export const StyledInput = styled.input`
  text-align: center;
  width: 100%;
  height: 45px;
`;

export const StyledDescriptionInput = styled.textarea`
  text-align: center;
  resize: none;
  width: 100%;
  height: 120px;
`;
