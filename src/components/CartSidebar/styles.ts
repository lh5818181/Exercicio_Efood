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
  width: 360px;
  height: 100% ;
  padding: 32px 8px 0px 8px;
  background: ${Cores.vermelhoClaro};
  color: ${Cores.bege};
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.2);

  
  }

  h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  leading-trim: none;
  line-height: 100%;
  letter-spacing: 0%;

  }
`

export const ItemList = styled.div`
  overflow-y: auto;


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
  background-color: ${Cores.bege};
  padding: 0.5rem;
  align-items: flex-end;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 0.75rem;
  }

  .lixeira {
      width: 16px;
      height: 16px;
      object-fit: cover;
  }

  div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 22px;

    span:first-child {
      font-size:  18px;
      font-weight: 900;
      line-height: 100%;
      color: ${Cores.vermelhoClaro};
      margin-bottom: 16px;
    }

    span:last-child {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      color: ${Cores.vermelhoClaro};
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
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 14px;
`

export const CheckoutButton = styled.button`
  background: ${Cores.bege};
  color: ${Cores.vermelhoClaro};
  border: none;
  padding: 4px 94px 4px 94px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: block;
  width: 344px;
  height: 24px;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;

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
