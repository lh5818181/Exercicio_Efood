import styled from "styled-components";
import { Cores } from "../../styles/global";

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 186px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SectionContainer = styled.section`
  img {
  height: 280px;
width: 100%;
}
`
export const TituloSection = styled.h1`
font-family: Roboto;
font-weight: 100;
font-size: 32px;
line-height: 100%;
letter-spacing: 0%;
`

export const SubTituloSection = styled.h1`
font-family: Roboto;
font-weight: 900;
font-size: 32px;
line-height: 100%;
letter-spacing: 0%;
`

export const ImagemHeader = styled.img`
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

export const LogoImagemHeader = styled.img`
  position: relative;
  z-index: 2;
  margin-bottom: 24px;
  display: block;
  transform: translateX(-50%);
`;

export const TituloHeader = styled.h2`
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  color: ${Cores.vermelhoClaro};
  font-size: 18px;
  font-weight: 900;
`;