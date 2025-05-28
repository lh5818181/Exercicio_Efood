// src/components/MenuItem/styles.ts
import styled from 'styled-components';
import { Cores } from '../../styles/global';

export const Card = styled.div<{ variant: 'even' | 'odd' }>`
  width: 300px;
  border-radius: 8px;
  background-color: ${({ variant }) =>
    variant === 'odd' ? Cores.vermelhoClaro : Cores.bege};
  color: ${({ variant }) =>
    variant === 'odd' ? Cores.bege : Cores.vermelhoClaro};
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
`;

export const Title = styled.h3`
  margin: 0.5rem 0 0.25rem;
  font-size: 1.2rem;
`;

export const Snippet = styled.p`
  font-size: 0.9rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  opacity: 0.85;
  max-height: 3rem;
  overflow: hidden;
`;
