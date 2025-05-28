import React from 'react';
import { TagContainer } from './styles';

export interface TagProps {
  size?: 'small' | 'big';
  children?: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children, size = 'small' }) => {
  return <TagContainer size={size}>{children}</TagContainer>;
};

export default Tag;
