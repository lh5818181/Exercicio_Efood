// src/components/ProductModal/styles.ts
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
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  position: relative;
  text-align: left;

  .close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: ${Cores.bege};
    cursor: pointer;
  }

  img {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  h2 {
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0.5rem 0;
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
  }
`;
