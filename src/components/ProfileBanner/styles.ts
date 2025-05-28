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
`;

export const Category = styled.span`
    font-size: 32px;
    font-weight: 100;
    padding-top: 10px;
    padding-bottom: 140px;
    margin-left: 170px;
`;

export const Name = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin-left: 170px;
`;
