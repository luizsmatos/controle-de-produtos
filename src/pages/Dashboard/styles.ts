import styled from 'styled-components';

const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 30%);
  grid-template-rows: auto;
  grid-gap: 2rem;
  justify-content: center;
`;

export default Container;
