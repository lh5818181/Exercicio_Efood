import styled, { css } from 'styled-components';
import { Cores } from '../../styles/global';

export const Card = styled.div<{ variant: 'even' | 'odd' }>`
  width: 320px;
  height: 380px;
  border-radius: 8px;
  background-color: ${Cores.vermelhoClaro};
  color: ${Cores.branca};
  font-family: 'Roboto', sans-serif;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }

  ${({ variant }) =>
    variant === 'even' &&
    css`
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    `}
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Title = styled.h3`
  margin: 0.5rem 0 0.25rem;
  font-size: 1.2rem;
`;

export const Snippet = styled.p`
  font-size: 14px;
  line-height: 1.2;
  opacity: 0.85;
  flex-grow: 1;            /* empurra o botão para baixo */
  overflow: hidden;
`;

export const Price = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const AddButton = styled.button`
  background-color: ${Cores.bege};
  color: ${Cores.vermelhoClaro};
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
    font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
`;
