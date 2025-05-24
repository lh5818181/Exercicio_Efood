import styled from 'styled-components';
import { Cores } from '../../styles/global';

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Imagem = styled.div`
  position: absolute;
  width: 100%; 
  height: 100%; 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Titulo = styled.h1`
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  font-size: 36px;
  font-weight: 900;
  color: ${Cores.vermelhoClaro};
  margin-top: 138px;
  margin-bottom: 40px;
`;

export const LogoImagem = styled.img`
  position: relative;
  z-index: 2;
  margin-bottom: 24px;
  display: block;
  left: 50%;
  transform: translateX(-50%);
`;