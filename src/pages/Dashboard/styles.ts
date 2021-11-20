import styled from 'styled-components';

const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  grid-template-rows: auto;
  grid-gap: 2rem;
  justify-content: center;

  div.not-found-products {
    height: calc(40vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    p {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    button {
      background: #ff9000;
      border: 0;
      height: 3rem;
      width: 10rem;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: bold;
      color: #fff;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;

export default Container;
