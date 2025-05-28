import styled from 'styled-components';
import { Cores } from '../../styles/global';

export const BannerFooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterImagem = styled.div<{ bg: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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

export const SocialLinks = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;

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
    }
  }
`;

export const FooterText = styled.p`
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  color: ${Cores.vermelhoClaro};
  margin-top: 138px;
`;
