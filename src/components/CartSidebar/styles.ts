import styled from 'styled-components'
import { Cores } from '../../styles/global'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`

export const Sidebar = styled.div`
  width: 454px;
  height: 94% ;
  background: ${Cores.vermelhoClaro};
  color: ${Cores.bege};
  padding: 1.5rem;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  border-radius: 8px 0 0 8px;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.2);

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    font-size: 1.8rem;
    color: ${Cores.bege};
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    border-bottom: 1px solid ${Cores.bege};
    padding-bottom: 0.5rem;
  }
`

export const ItemList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Cores.bege};
    border-radius: 3px;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: rgba(255,255,255,0.05);
  padding: 0.5rem;
  border-radius: 6px;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 0.75rem;
  }

  div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;

    span:first-child {
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1.2;
    }

    span:last-child {
      font-size: 0.85rem;
    }
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: ${Cores.bege};
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin: 1rem 0;
  font-size: 1.1rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${Cores.bege};
`

export const CheckoutButton = styled.button`
  background: ${Cores.bege};
  color: ${Cores.vermelhoClaro};
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: block;
  width: 100%;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  font-size: 1rem;

  &:hover {
    background: ${Cores.vermelhoClaro};
    color: ${Cores.bege};
    transform: scale(1.02);
  }
`

export const EmptyMessage = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: ${Cores.bege};
  opacity: 0.7;
  font-size: 1rem;
`
