import styled from 'styled-components';
import { Cores } from '../../styles/global';

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

`;

export const Card = styled.div`
  background-color: ${Cores.branca};
  border: 1px solid ${Cores.vermelhoClaro};
  color: ${Cores.vermelhoClaro};
  border-radius: 8px;
  width: 473px;
  height: 398;
  margin-bottom: 48px;

  .containerProduct {
    padding: 0px 22px;}

`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Button = styled.div`
  background-color: ${Cores.vermelhoClaro};
  color: ${Cores.bege};
    width: 106px;
    padding: 4px 6px;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;

`

export const ProductImage = styled.img`
    width: 472px;
    height: 217px;
`