import React from 'react';
import heroImg from '../../assets/Fundo.png';
import LogoImg from '../../assets/logo.png';
import {
  BannerContainer,
  Imagem,
  Titulo,
  LogoImagem,
} from './styles';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <Imagem bg={heroImg} />
      <div className="container">
        <LogoImagem src={LogoImg} alt="Logo" />
        <Titulo>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </Titulo>
      </div>
    </BannerContainer>
  );
};

export default Banner;
