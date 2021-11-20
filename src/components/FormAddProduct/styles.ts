import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

const FormContainer = styled(Unform)`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  button {
    margin-top: 2rem;
    align-self: center;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  button {
    font-weight: 600;
    border-radius: 0.5rem;
    border: 0;
    background: #39b100;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .text {
      padding: 0 1.5rem;
    }

    .icon {
      display: flex;
      padding: 1rem;
      background: #41c900;
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }
`;

export default FormContainer;
