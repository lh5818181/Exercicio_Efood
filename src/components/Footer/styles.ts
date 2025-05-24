import styled from 'styled-components'
import { Cores } from '../../styles/global'


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
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 24px;

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
`