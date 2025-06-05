import styled from 'styled-components';
import { Cores } from '../../styles/global';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
position: relative;
    width: 100%;
    height: 186px;
    display: flex;
    align-items: center;
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
`;

export const Title = styled.h2`
    color: ${Cores.vermelhoClaro};
    position: relative;
    margin-left: 171px;
    z-index: 2;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 900;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
    margin-right: 193px;
    margin-left: 264px;
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
  margin-right: 171px;
`;