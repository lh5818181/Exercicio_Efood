// src/components/ProductModal/styles.ts
import styled from 'styled-components'
import { Cores } from '../../styles/global'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const Content = styled.div`
  background: ${Cores.vermelhoClaro};
  color: ${Cores.branca};
  width: 1024px;
  display: flex;
  gap: 2rem;
  border-radius: 8px;
  position: relative;
  padding: 2rem;
  flex-direction: row;
  align-items: flex-start;
`

export const Left = styled.div`
  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

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
    margin-bottom: 16px;
  }
`

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
`

// Novo componente para a imagem de fechar
export const CloseImg = styled.img`
  position: absolute;
  top: 1rem;      /* ou 498px se usar px fixo, mas recomendado top:1rem */
  right: 1rem;    /* ou left:1171px conforme layout absoluto */
  width: 16px;
  height: 16px;
  cursor: pointer;
  opacity: 1;
  transform: rotate(0deg);
`
