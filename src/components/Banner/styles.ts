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

export const Imagem = styled.div<{ bg: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const LogoImagem = styled.img`
  position: relative;
  z-index: 2;
  margin-bottom: 24px;
  display: block;
  left: 50%;
  transform: translateX(-50%);
`;

export const Titulo = styled.h1`
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  color: ${Cores.vermelhoClaro};
  margin-top: 138px;
  margin-bottom: 40px;
`;
