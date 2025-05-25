import heroImg from '../../assets/Fundo.png';
import LogoImg from '../../assets/logo.png';
import InstaIcon from '../../assets/instagram-icon.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter-icon.png'
import { BannerFooterContainer, FooterImagem, FooterText, LogoImagemFooter, SocialLinks } from "./styles";

const Footer = () => {
  return (
    <BannerFooterContainer>
    <FooterImagem style={{ backgroundImage: `url(${heroImg})` }} />
    <div className='container'>
        <LogoImagemFooter src={LogoImg} alt="Logo" /> 
        <SocialLinks>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstaIcon} alt="Instagram" width={32} height={32} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" width={32} height={32} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" width={32} height={32} />
          </a>
        </SocialLinks>
        <FooterText>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br /> 
        dos produtos é toda do estabelecimento contratado.</FooterText>
    </div>
    </BannerFooterContainer>
  );
}

export default Footer;