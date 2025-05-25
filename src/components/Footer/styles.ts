import styled from 'styled-components'
import { Cores } from '../../styles/global'

export const BannerFooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterImagem = styled.div`
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

export const LogoImagemFooter = styled.img`
  position: relative;
  z-index: 2;
  margin-bottom: 32px;
  display: block;
  left: 50%;
  transform: translateX(-50%);
`;

export const FooterText = styled.p`
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  font-size: 10px;
  font-weight: 400;
  color: ${Cores.vermelhoClaro};
  margin-top: 138px;
`
export const SocialLinks = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);

    a {
        display: inline-flex;
        align-items: center;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.7;
        }

        img {
            width: 32px;
            height: 32px;
            display: block;
            margin-right: 8px;
            margin-bottom: 40px;
        }
    }
`