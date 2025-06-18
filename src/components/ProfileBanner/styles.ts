import styled from 'styled-components';
import { Cores } from '../../styles/global';

export const Banner = styled.section<{ bg: string }>`
  width: 100%;
  height: 280px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${Cores.branca};

&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
}
position: relative;

> * {
    position: relative;
    z-index: 1;
}

`;

export const containerProfile = styled.div`
    max-width: 1366px;
    margin: 0px auto;
    width: 100%;
    display: flex;
    flex-direction: column;`

export const Category = styled.span`
    font-size: 32px;
    font-weight: 100;
    font-family: 'Roboto', sans-serif;
    margin-top: 25px;
    margin-left: 170px;
    margin-bottom: 156px;
    font-family: Roboto;
    line-height: 100%;
    letter-spacing: 0%;

}
`;

export const Name = styled.h1`
    font-size: 32px;
    font-weight: 900;
    margin-left: 170px;
    margin-bottom: 32px;
    font-family: Roboto;
    line-height: 100%;
    letter-spacing: 0%;

`;
