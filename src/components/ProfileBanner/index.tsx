import React from 'react';
import * as S from './styles';

interface BannerProps {
  bg: string;
  category: string;
  name: string;
}

const ProfileBanner: React.FC<BannerProps> = ({ bg, category, name }) => {
  return (
    <S.Banner bg={bg}>
      <S.Category>{category}</S.Category>
      <S.Name>{name}</S.Name>
    </S.Banner>
  );
};

export default ProfileBanner;
