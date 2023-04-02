import StyledModal from './style';

interface CustomModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function CustomModal({ isOpen, setIsOpen }: CustomModalProps) {
  function toggleModal(): void {
    setIsOpen(!isOpen);
  }

  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={() => toggleModal()}
      onEscapeKeydown={() => toggleModal()}
    >
      <span>I am a modal!</span>
    </StyledModal>
  );
}

export default CustomModal;
