import styled from 'styled-components';
import { Cores } from '../../styles/global';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 100%; 
  min-width: 100%;
  height: 186px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  text-align: center;
  flex-direction: row;
  overflow: hidden;
`;

export const HeaderContent = styled.div`
    max-width: 1366px;
    margin: 0px auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;`

export const Background = styled.div<{ bg: string }>`
  width: 100%; 
  min-width: 100%; 
  left: 0;
  height: 186px;
  position: absolute;
  top: 0;
  background: ${({ bg }) => `url(${bg}) center/cover no-repeat`};
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
  margin-left: 170px;
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
  margin-left: 330px;
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