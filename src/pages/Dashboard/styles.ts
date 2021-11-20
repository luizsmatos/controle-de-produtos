import styled from 'styled-components';

const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  grid-template-rows: auto;
  grid-gap: 2rem;
  justify-content: center;
`;

export default Container;
