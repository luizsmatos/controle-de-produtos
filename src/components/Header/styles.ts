import styled from 'styled-components';

const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    div {
      margin-left: 1rem;

      h1 {
        font-size: 1.7rem;
        color: var(--gray-100);
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
      }

      p {
        font-size: 0.9rem;
        color: var(--gray-100);
        opacity: 0.7;
      }
    }
  }

  div.menu {
    padding: 0 2.25rem;

    nav {
      display: flex;
      align-items: center;

      a {
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        height: 5rem;
        line-height: 5rem;
        color: var(--gray-300);

        transition: color 0.2s;

        & + a {
          margin-left: 2rem;
        }

        &:hover {
          color: var(--white);
        }

        &.active {
          color: var(--white);
          font-weight: bold;
        }

        &.active::after {
          content: '';
          height: 3px;
          border-radius: 3px 3px 0 0;
          width: 100%;
          position: absolute;
          bottom: 1px;
          left: 0;
          background: var(--yellow-500);
        }
      }
    }
  }
`;

export default Container;
