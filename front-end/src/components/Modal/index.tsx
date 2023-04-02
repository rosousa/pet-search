import {
  StyledModal,
  StyledForm,
  StyledInput,
  StyledDescriptionInput,
} from './styles';

interface CustomModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function CustomModal({ isOpen, setIsOpen }: CustomModalProps) {
  function toggleModal(): void {
    setIsOpen(!isOpen);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={() => toggleModal()}
      onEscapeKeydown={() => toggleModal()}
    >
      <StyledForm onSubmit={(event) => handleSubmit(event)}>
        <StyledInput required type="url" placeholder="image" />
        <StyledInput required type="text" placeholder="name" />
        <StyledDescriptionInput required placeholder="description" />
        <button type="submit">register</button>
      </StyledForm>
    </StyledModal>
  );
}

export default CustomModal;
