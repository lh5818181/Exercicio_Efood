import styled from 'styled-components'
import { Cores } from '../../styles/global'

// Container geral de formulário
export const Form = styled.form`
  width: 100%;
  background: ${Cores.vermelhoClaro};
  color: ${Cores.bege};
  border-radius: 8px;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`

export const Field = styled.div<{ flex?: number }>`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex ?? 'unset'};
  margin-bottom: 1rem;
`

export const Label = styled.label`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`

export const Input = styled.input`
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  color: #111;
`

export const Button = styled.button<{ full?: boolean }>`
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  background: ${({ full }) => (full ? Cores.bege : 'transparent')};
  color: ${({ full }) => (full ? Cores.vermelhoClaro : Cores.bege)};
  border: ${({ full }) => (full ? 'none' : `2px solid ${Cores.bege}`)};
  width: ${({ full }) => (full ? '100%' : 'auto')};
  margin-right: ${({ full }) => (full ? '0' : '1rem')};

  &:hover {
    opacity: 0.8;
  }
`

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
`

export const ConfirmationContainer = styled.div`
  padding: 24px;
  max-width: 500px;
  margin: 2rem auto;
  background: ${Cores.vermelhoClaro};
  color: ${Cores.bege};
  border-radius: 8px;
  text-align: center;
`

export const Text = styled.p`
  margin-bottom: 1rem;
  line-height: 1.4;
`
