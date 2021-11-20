import Modal from '../Modal';
import Form from '../Form';

import Products from '../../types';

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateProduct: (data: Products) => void;
}

const ModalEditFood = ({
  isOpen,
  setIsOpen,
  handleUpdateProduct,
}: ModalEditFoodProps) => {
  const handleSubmit = (data: Products) => {
    handleUpdateProduct(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form />
    </Modal>
  );
};

export default ModalEditFood;
