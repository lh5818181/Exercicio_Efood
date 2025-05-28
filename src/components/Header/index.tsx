import LogoImg from '../../assets/logo.png';
import heroImg from '../../assets/Fundo.png';
import imgFundoProfile from '../../assets/imagem-fundo-perfil.png';
import { HeaderContainer, ImagemHeader, LogoImagemHeader, SectionContainer, SubTituloSection, TituloHeader, TituloSection } from "./Styles";


const Header = () => {
    return (
        <><HeaderContainer>
            <ImagemHeader style={{ backgroundImage: `url(${heroImg})` }} />
            <TituloHeader>Restaurantes</TituloHeader>
            <LogoImagemHeader src={LogoImg} alt="Logo" />
            <TituloHeader>0 produto(s) no carrinho</TituloHeader>
        </HeaderContainer>
        <SectionContainer>
                <img style={{ backgroundImage: `url(${imgFundoProfile})` }} alt="" />
                <TituloSection>Italiana</TituloSection>
                <SubTituloSection>La Dolce Vita Trattoria</SubTituloSection>
        </SectionContainer></>
    );
}

export default Header