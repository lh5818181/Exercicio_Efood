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
    color: ${Cores.branca};
    width: 1024px;
    display: flex;
    gap: 2rem;
    border-radius: 8px;
    position: relative;
    padding: 2rem;
    align-items: center;
    justify-items: center;
    flex-direction: row;`

export const Left = styled.div`
  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    flex-grow: 1;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }
`;

export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const AddModalButton = styled.button`
  background: ${Cores.bege};
  color: ${Cores.vermelhoClaro};
    padding: 4px 8px;
    border: none;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${Cores.bege};
  cursor: pointer;
`;
