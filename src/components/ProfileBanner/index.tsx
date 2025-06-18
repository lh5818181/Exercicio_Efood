import React from 'react'
import * as S from './styles'

interface ProfileBannerProps {
  bg: string
  category: string
  name: string
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ bg, category, name }) => (
  <S.Banner bg={bg}>
    <S.containerProfile>
      <S.Category>{category}</S.Category>
      <S.Name>{name}</S.Name>
    </S.containerProfile>
  </S.Banner>
)

export default ProfileBanner
