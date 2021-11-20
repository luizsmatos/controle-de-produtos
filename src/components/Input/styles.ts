import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

const Container = styled.div<ContainerProps>`
  background: var(--gray-100);
  border-radius: 0.5rem;
  padding: 0.7rem 1.2rem;
  width: 100%;
  font-size: 0.8rem;

  & + div {
    margin-top: 1.2rem;
  }

  label {
    font-size: 1.2rem;
    color: var(--gray-850);
    width: 100%;

    display: flex;
    flex-direction: column;

    p {
      span {
        font-size: 0.8rem;
        color: #ff0000;
        font-style: italic;
        opacity: 0.5;
      }
    }

    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

    input {
      flex: 1;
      background: transparent;
      border: 0;
      color: var(--gray-800);
      margin-top: 0.5rem;

      &::placeholder {
        color: #b7b7cc;
      }

      ${(props) =>
        props.isFocused &&
        css`
          color: var(--gray-850);
        `}

      ${(props) =>
        props.isFilled &&
        css`
          color: #b7b7cc;
          font-style: italic;
        `}
    }
  }
`;

export default Container;
