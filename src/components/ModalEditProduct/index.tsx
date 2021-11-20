import Modal from '../Modal';
import FormEditProduct from '../FormEditProduct';

interface ModalEditProductsProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalEditProduct = ({ isOpen, setIsOpen }: ModalEditProductsProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <FormEditProduct />
    </Modal>
  );
};

export default ModalEditProduct;
