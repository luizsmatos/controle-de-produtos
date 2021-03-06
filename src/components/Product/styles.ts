import styled, { css } from 'styled-components';

interface ContainerProps {
  available: boolean;
}

const Container = styled.div<ContainerProps>`
  background: #f0f0f5;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    background: var(--white);
    border-radius: 0.5rem 0.5rem 0px 0px;
    height: 192px;
    overflow: hidden;
    transition: 0.3s opacity;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
      !props.available &&
      css`
        opacity: 0.3;
      `};

    img {
      background-size: cover;
      max-width: 450px;
      max-height: 192px;
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    padding: 1.9rem;

    h2 {
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;
      font-weight: bold;
      font-style: italic;
      font-size: 0.8rem;
      opacity: 0.6;

      margin-top: 0.5rem;

      & + p {
        margin-top: 0.2rem;
      }
    }

    p.price {
      margin-top: 1rem;
      font-style: normal;
      font-size: 1.5rem;
      line-height: 2rem;
      color: #39b100;
      opacity: 1;

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.2rem 2rem;
    background: #e4e4eb;
    border-radius: 0 0 0.5rem 0.5rem;

    div.icon-container {
      display: flex;

      button {
        background: #fff;
        padding: 0.7rem;
        border-radius: 0.5rem;
        display: flex;
        border: none;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }

        svg {
          color: #3d3d4d;
        }

        & + button {
          margin-left: 0.4rem;
        }
      }
    }

    div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: #3d3d4d;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 5.5rem;
        height: 2rem;
        margin-left: 0.8rem;

        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #c72828;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 1rem;

          &:before {
            position: absolute;
            content: '';
            height: 1.2rem;
            width: 2.5rem;
            left: 0.5rem;
            bottom: 0.4rem;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 0.7rem;
          }
        }

        input:checked + .slider {
          background-color: #39b100;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(2rem);
          -ms-transform: translateX(2rem);
          transform: translateX(2rem);
        }
      }
    }
  }
`;

export default Container;
