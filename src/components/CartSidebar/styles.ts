// src/components/CartSidebar/styles.ts
import styled from 'styled-components';
import { Cores } from '../../styles/global';

export const Panel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background: ${Cores.vermelhoClaro};
  color: ${Cores.bege};
  padding: 1.5rem;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  z-index: 900;

  h2 {
    margin: 0 0 1rem;
  }

  button {
    width: 100%;
    background: ${Cores.bege};
    color: ${Cores.vermelhoClaro};
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1rem;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    object-fit: cover;
  }

  div {
    flex: 1;

    strong {
      display: block;
    }
    span {
      font-size: 0.9rem;
    }
  }

  button {
    background: transparent;
    border: none;
    font-size: 1.2rem;
    color: ${Cores.bege};
    cursor: pointer;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 1.1rem;
`;
