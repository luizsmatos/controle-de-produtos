import { createRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';

import * as Yup from 'yup';
import { FiCheckSquare } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import Header from '../../components/Header';
import Input from '../../components/Input';

import Form from './styles';
import Products from '../../types';

const FormsAddNewProduct = () => {
  const formRef = createRef<FormHandles>();

  const handleSubmit: SubmitHandler<Products> = async (data: Products) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        idProduct: Yup.string().required('Campo obrigatório!'),
        image: Yup.string()
          .min(30, 'Forneça uma imagem válida')
          .required('Campo obrigatório!'),
        name: Yup.string().required('Campo obrigatório!'),
        category: Yup.string().required('Campo obrigatório!'),
        supplier: Yup.string().required('Campo obrigatório!'),
        price: Yup.string().required('Campo obrigatório!'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.reset();
    } catch (err) {
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
    <>
      <Header />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>
          Novo Produto <BsBoxSeam color="#39b100" size={40} />
        </h1>
        <Input
          name="image"
          label="Imagem"
          placeholder="Insira a URL da imagem"
        />

        <Input
          name="idProduct"
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
        <Input
          name="supplier"
          label="Fornecedor"
          placeholder="Exemplo: Apple"
        />

        <Input name="price" label="Preço" placeholder="Exemplo: 19.90" />
        <button type="submit">
          <p className="text">Adicionar Produto</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </>
  );
};

export default FormsAddNewProduct;
