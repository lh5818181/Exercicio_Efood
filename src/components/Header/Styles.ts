import styled from 'styled-components';
import { Cores } from '../../styles/global';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
position: relative;
    width: 100%;
    height: 186px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: space-around;
    gap: 2rem;
    text-align: center;
    flex-direction: row;
`;

export const Background = styled.div<{ bg: string }>`
  position: absolute;
  width: 1342px;
  height: 186px;
  inset: 0;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const Logo = styled.img`
  position: relative;
  z-index: 2;
  width: 120px;
  height: auto;
  left: 50%;
`;

export const Title = styled.h2`
  position: relative;
  z-index: 2;
  color: ${Cores.vermelhoClaro};
    font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 900;
  white-space: nowrap;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const CartButton = styled.button`
  background: transparent;
  border: none;
  color: ${Cores.vermelhoClaro};
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 900;
  position: relative;
  z-index: 2;
`;