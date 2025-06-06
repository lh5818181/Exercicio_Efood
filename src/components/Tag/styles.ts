import styled from 'styled-components';
import { Cores } from '../../styles/global';
import { TagProps } from '.';

export const TagContainer = styled.span<TagProps>`
  background-color: ${Cores.vermelhoClaro};
  color: ${Cores.branca};
  font-size: ${props => (props.size === 'small' ? '10px' : '12px')};
  font-weight: 700;
  padding: ${props => (props.size === 'big' ? '6px 4px' : '8px 6px')};
  display: inline-block;
`;
