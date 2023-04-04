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
        <StyledInput required type="text" placeholder="name" maxLength={30} />
        <StyledInput required type="text" placeholder="(00) 00000-0000" />
        <StyledDescriptionInput required placeholder="description" />
        <button type="submit">register</button>
      </StyledForm>
    </StyledModal>
  );
}

export default CustomModal;
