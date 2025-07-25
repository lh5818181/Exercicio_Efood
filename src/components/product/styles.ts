import styled from 'styled-components';
import { Cores } from '../../styles/global';
import { Link } from 'react-router-dom';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const ContainerTagTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const Rating = styled.span`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: ${Cores.vermelhoClaro};
  padding: 0px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;

  img {
    margin-left: 8px;
    width: 21px;
    height: 21px;
    
  }
`;

export const Card = styled.div`
  background-color: ${Cores.branca};
  border: 1px solid ${Cores.vermelhoClaro};
  border-radius: 8px;
  width: 473px;
  height: 398px;
  position: relative;

  .containerProduct {
    padding: 0 8px;

    p {
      margin: 16px 0px;
    }
  }
`;

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin: 0px;
  color: ${Cores.vermelhoClaro};
`;

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${Cores.vermelhoClaro};
`;

export const Button = styled(Link)`
  display: inline-block;
  background-color: ${Cores.vermelhoClaro};
  color: ${Cores.bege};
  width: 106px;
  padding: 4px 6px;
  text-align: center;
  margin-bottom: 8px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
`;

export const ProductImage = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  & > * + * {
    margin-left: 8px;
  }
`;
