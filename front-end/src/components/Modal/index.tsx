import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  StyledModal,
  StyledForm,
  StyledInput,
  StyledDescriptionInput,
} from './styles';
import 'react-toastify/dist/ReactToastify.css';

interface CustomModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface ModalInputs {
  image: string;
  name: string;
  tel: string;
  description: string;
}

function CustomModal({ isOpen, setIsOpen }: CustomModalProps) {
  const [modalInputs, setInputs] = useState<ModalInputs>({
    image: '',
    name: '',
    tel: '',
    description: '',
  });

  const [tel, setTel] = useState<string>('');

  const notify = (message: string, type: string): void => {
    if (type === 'error') {
      toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    if (type === 'success') {
      toast.success(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  function toggleModal(): void {
    setIsOpen(!isOpen);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const pattern =
      /(?:^\([0]?[1-9]{2}\)|^[0]?[1-9]{2}[.-\s]?)[9]?[1-9]\d{3}[.-\s]?\d{4}$/;

    const telValidator = new RegExp(pattern);

    if (!telValidator.test(tel)) notify('Invalid Phone Number', 'error');
  }

  return (
    <>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={() => toggleModal()}
        onEscapeKeydown={() => toggleModal()}
      >
        <StyledForm onSubmit={(event) => handleSubmit(event)}>
          <StyledInput
            required
            type="url"
            placeholder="image"
            onChange={(e) =>
              setInputs({ ...modalInputs, image: e.target.value })
            }
            onInvalid={() => notify('Invalid Image URL', 'error')}
          />
          <StyledInput
            required
            type="text"
            placeholder="name"
            minLength={3}
            maxLength={30}
            onInvalid={() => notify('Invalid Name', 'error')}
          />
          <StyledInput
            required
            type="text"
            placeholder="(00) 00000-0000"
            maxLength={15}
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            onInvalid={() => notify('Invalid Phone Number', 'error')}
          />
          <StyledDescriptionInput
            required
            placeholder="description"
            maxLength={150}
            onInvalid={() => notify('Invalid Description', 'error')}
          />
          <button type="submit">register</button>
        </StyledForm>
      </StyledModal>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default CustomModal;
