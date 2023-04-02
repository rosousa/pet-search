import {
  StyledModal,
  StyledImage,
  StyledTitle,
  StyledDescription,
} from './style';

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
      <StyledImage
        src="https://www.sbb.ch/content/dam/internet/sharedimages/personen/GA-Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"
        alt="animal"
      />
      <StyledTitle>Thor</StyledTitle>
      {/* 262 characters */}
      <StyledDescription>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quos iure
        dolor distinctio eveniet fuga quidem maiores quia nihil expedita
        dolores, aspernatur illum necessitatibus modi quisquam perferendis
        voluptas. Dolor, quasi? Dolor, quasi?Dolor, quasi? quasi?
      </StyledDescription>
    </StyledModal>
  );
}

export default CustomModal;
