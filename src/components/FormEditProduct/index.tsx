/* eslint-disable no-restricted-globals */
import { createRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';

import * as Yup from 'yup';
import { FiCheckSquare } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { useProducts } from '../../hooks/useProducts';
import Input from '../Input';

import FormContainer from './styles';
import Products from '../../types';

const Form = () => {
  const { editingProduct, handleEditedProduct } = useProducts();
  const formRef = createRef<FormHandles>();

  const handleSubmit: SubmitHandler<Products> = async (data: Products) => {
    try {
      formRef.current?.setErrors({});

      // Validação do formulário
      const schema = Yup.object().shape({
        productId: Yup.string().required('Campo obrigatório!'),
        image: Yup.string()
          .url('Insira uma URL válida!')
          .required('Campo obrigatório!'),
        name: Yup.string().required('Campo obrigatório!'),
        category: Yup.string().required('Campo obrigatório!'),
        supplier: Yup.string().required('Campo obrigatório!'),
        price: Yup.string()
          .test('is-price', 'Insira um valor correto', (value) => {
            if (value === '') return true;
            return !isNaN(Number(value?.replace(',', '.')));
          })
          .required('Campo obrigatório!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.reset();

      // Atualiza o produto com as informações do formulário
      handleEditedProduct({
        ...data,
        id: editingProduct.id,
        available: editingProduct.available,
      });
    } catch (err) {
      // Se o erro for de validação, mostra os erros
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {} as Record<string, string>;
        err.inner.forEach(({ path, message }) => {
          if (path) {
            validationErrors[path] = message;
          }
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  };

  return (
    <FormContainer
      ref={formRef}
      initialData={editingProduct}
      onSubmit={handleSubmit}
    >
      <h1>
        Editar Produto <BsBoxSeam color="#eba417" size={40} />
      </h1>
      <Input name="image" label="Imagem" placeholder="Insira a URL da imagem" />

      <Input
        name="productId"
        label="Codigo do Produto"
        placeholder="Exemplo: 145791"
      />
      <Input
        name="category"
        label="Categoria"
        placeholder="Exemplo: Eletrônico"
      />

      <Input
        name="name"
        label="Nome do Produto"
        placeholder="Exemplo: Celular"
      />
      <Input name="supplier" label="Fornecedor" placeholder="Exemplo: Apple" />

      <Input name="price" label="Preço" placeholder="Exemplo: 19.90" />
      <button type="submit">
        <p className="text">Editar Produto</p>
        <div className="icon">
          <FiCheckSquare size={24} />
        </div>
      </button>
    </FormContainer>
  );
};

export default Form;
