import styled from 'styled-components';
import { Cores } from '../../styles/global';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Content = styled.div`
  background: ${Cores.vermelhoClaro};
  color: ${Cores.bege};
  padding: 2rem;
  max-width: 1024px;
  width: 90%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  border-radius: 8px;

  .close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: ${Cores.bege};
    cursor: pointer;
    line-height: 1;
  }

  img {
    width: 100%;
    max-width: 320px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.5rem 0;
    line-height: 1.4;
    font-size: 0.95rem;
  }

  button {
    background: ${Cores.bege};
    color: ${Cores.vermelhoClaro};
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 1rem;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.85;
    }
  }
`;
